import { expect, test } from 'vitest'
import { useItems } from './useItems'

const { addItem, removeItem, toDoList, newItem } = useItems();

test('Add item to to do list', () => {
    newItem.value = 'Buy flour & sugar'
    addItem()
    expect(toDoList.value.length).toBe(1)
    expect(toDoList.value[0]).toBe('Buy flour & sugar')
})

test('Remove item from the list', () => {
    expect(toDoList.value.length).toBeGreaterThan(0)
    removeItem(0)
    expect(toDoList.value.length).toBe(0)
    
})

test('Adding null string should not update the list', () => {
    newItem.value = ''
    addItem()
    expect(toDoList.value.length).toBe(0)
})

test('Adding duplicate items should not update the list', () => {
    newItem.value = 'test'
    addItem()
    addItem()
    expect(toDoList.value.length).toBe(1)
})
