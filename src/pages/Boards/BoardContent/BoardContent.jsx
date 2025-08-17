/* eslint-disable react/prop-types */
import React from 'react'
import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sort'
import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors, closestCorners } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { DragOverlay, defaultDropAnimationSideEffects } from '@dnd-kit/core'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'
import { cloneDeep, isEmpty } from 'lodash'
import { generatePlaceholderCard } from '~/utils/formatter'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

function BoardContent({ board }) {
  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: {
  //     distance: 10
  //   }
  // })
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10
    }
  })
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 100,
      tolerance: 10
    }
  })
  const sensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setOrderedColumns] = useState([])
  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)
  const [activeColumnWhenDragging, setActiveColumn] = useState(null)

  useEffect(() => {
    const orderedColumns = mapOrder(board.columns, board.columnOrderIds, '_id')
    orderedColumns.map(column => {
      column.cards = mapOrder(column.cards, column.cardOrderIds, '_id')
    })
    setOrderedColumns(orderedColumns)
  }, [board])

  const findColumnByCardId = (cardId) => {
    return orderedColumns.find(column => column.cards.map(c => c._id).includes(cardId))
  }

  const moveCardDifferentColumn = (
    overColumn,
    overCardId,
    active,
    over,
    activeColumn,
    activeDraggingCardId,
    activeDraggingData
  ) => {
    setOrderedColumns(prevColumns => {
      const overCardIndex = overColumn.cards?.findIndex(card => card._id === overCardId)

      let newCardIndex
      const isBelowOverItem =
        active.rect.current.translated &&
        active.rect.current.translated.top >
        over.rect.top + over.rect.height

      const modifier = isBelowOverItem ? 1 : 0

      newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1

      const nextColumns = cloneDeep(prevColumns)
      const nextActiveColumns = nextColumns.find(column => column._id === activeColumn._id)
      const nextOverColumns = nextColumns.find(column => column._id === overColumn._id)

      if (nextActiveColumns) {
        nextActiveColumns.cards = nextActiveColumns.cards.filter(card => card._id !== activeDraggingCardId)

        // thêm placeholder card khi column rỗng
        if (isEmpty(nextActiveColumns.cards)) {
          nextActiveColumns.cards.push(generatePlaceholderCard(nextActiveColumns))
        }

        nextActiveColumns.cardOrderIds = nextActiveColumns.cards.map(c => c._id)
      }
      if (nextOverColumns) {
        nextOverColumns.cards = nextOverColumns.cards.filter(card => card._id !== activeDraggingCardId)
        const rebuild_activeDraggingCardData = {
          ...activeDraggingData,
          columnId: nextOverColumns._id
        }

        nextOverColumns.cards = nextOverColumns.cards.toSpliced(newCardIndex, 0, rebuild_activeDraggingCardData)

        // xóa placeholder card khi column có card
        nextOverColumns.cards = nextOverColumns.cards.filter(card => !card.FE_PlaceholderCard)


        nextOverColumns.cardOrderIds = nextOverColumns.cards.map(c => c._id)
      }

      return nextColumns
    })
  }

  const handleDragEnd = (event) => {
    const { active, over } = event

    if (!over || !active) return

    // Xử lý kéo thả card
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      const { id: overCardId } = over
      const { id: activeDraggingCardId, data: { current: activeDraggingData } } = active

      const overColumn = findColumnByCardId(overCardId)

      if (!activeColumnWhenDragging || !overColumn) return

      if (activeColumnWhenDragging._id !== overColumn._id) {
        moveCardDifferentColumn(overColumn, overCardId, active, over, activeColumnWhenDragging, activeDraggingCardId, activeDraggingData)
      } else {
        const oldCardIndex = activeColumnWhenDragging?.cards?.findIndex(c => c._id === activeDragItemId)
        const newCardIndex = overColumn.cards.findIndex(c => c._id === overCardId)

        const dndOrderedCards = arrayMove(activeColumnWhenDragging?.cards, oldCardIndex, newCardIndex)

        setOrderedColumns(prevColumns => {
          const nextColumns = cloneDeep(prevColumns)
          const targetColumn = nextColumns.find(c => c._id === activeColumnWhenDragging._id)

          targetColumn.cards = dndOrderedCards

          targetColumn.cardOrderIds = targetColumn.cards.map(c => c._id)

          return nextColumns
        })
      }
    }

    // Xử lý kéo thả column
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      // if (active.id != over?.id) {
      //   const oldColumnIndex = orderedColumns.findIndex(c => c._id === active.id)
      //   const newColumnIndex = over?.data?.current?.columnId ?
      //     orderedColumns.findIndex(c => c._id === findColumnByCardId(over?.id)._id) :
      //     orderedColumns.findIndex(c => c._id === over?.id)
      //   const dndOrderedColumns = arrayMove(orderedColumns, oldColumnIndex, newColumnIndex)
      //   // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
      //   // console.log(dndOrderedColumnsIds)

      //   setOrderedColumns(dndOrderedColumns)
      // }
    }
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
    setActiveColumn(null)
  }

  const handleDragOver = (event) => {
    const { active, over } = event

    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      console.log(active.id != over?.id);
      if (active.id != over?.id) {
        const oldColumnIndex = orderedColumns.findIndex(c => c._id === active.id)
        const newColumnIndex = over?.data?.current?.columnId ?
          orderedColumns.findIndex(c => c._id === findColumnByCardId(over?.id)._id) :
          orderedColumns.findIndex(c => c._id === over?.id)
        const dndOrderedColumns = arrayMove(orderedColumns, oldColumnIndex, newColumnIndex)

        setOrderedColumns(dndOrderedColumns)
      }
      return
    }

    if (!active || !over) return

    const { id: activeDraggingCardId, data: { current: activeDraggingData } } = active
    const { id: overCardId } = over

    const activeColumn = findColumnByCardId(activeDraggingCardId)
    const overColumn = findColumnByCardId(overCardId)

    if (!activeColumn || !overColumn) return

    if (activeColumn._id !== overColumn._id) {
      moveCardDifferentColumn(overColumn, overCardId, active, over, activeColumn, activeDraggingCardId, activeDraggingData)
    }
  }

  const handleDragStart = (event) => {
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(event?.active?.data.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD :
      ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemData(event?.active?.data?.current)
    if (event?.active?.data.current?.columnId) setActiveColumn(findColumnByCardId(event?.active?.id))
  }

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.7'
        }
      }
    })
  }

  return (
    <>
      <DndContext
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        sensors={sensors}
        collisionDetection={closestCorners}>
        <Box sx={{
          height: (theme) => `calc(${theme.trello.boardContentHeight})`,
          backgroundColor: 'primary.main',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          overflowY: 'hidden'
        }}>
          <ListColumns columns={orderedColumns} />
          <DragOverlay dropAnimation={dropAnimation}>
            {!activeDragItemId && null}
            {activeDragItemId && activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN &&
              <Column column={activeDragItemData} />
            }
            {activeDragItemId && activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD &&
              <Card card={activeDragItemData} />
            }
          </DragOverlay>
        </Box >
      </DndContext>
    </>
  )
}

export default BoardContent
