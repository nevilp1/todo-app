<template>
  <div class="scrollable">
    <div class="content">
      <table
        style="margin-left: auto; margin-right: auto; border-spacing: 5px"
        aria-label="todo list"
      >
        <th></th>
        <tr v-for="(item, index) in toDoList" class="list-items" :key="item">
          <td>
            {{ index + 1 + ". " }}
          </td>
          <td>
            {{ item }}
          </td>
          <td @click="removeItem(index)" style="cursor:pointer">
            <IconClose style="margin-top: 0.6em" />
          </td>
        </tr>
      </table>
      <div class="form-input">
        <input
          v-model="newItem"
          placeholder="Type something..."
          style="margin-right: 1em"
        />
        <button class="button-add" @click="addItem" style="cursor:pointer">
          <icon-plus class="icon-plus" /> Add Item
        </button>
      </div>
      <p style="text-align:center; margin-top: 1rem;">{{ message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconPlus from "./../components/icons/IconPlus.vue";
import IconClose from "./../components/icons/IconClose.vue";
import { useItems } from "./useItems";

const { addItem, removeItem, toDoList, newItem, message } = useItems();
</script>

<style>
.content {
  padding-top: 2em;
}

.scrollable {
  overflow-y: auto;
  overflow-x: auto;
  white-space: nowrap;
  height: 550px;
}

.button-add {
  background-color: #25316d;
  padding: 6px;
  border: 2px solid white;
  border-radius: 10px;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  display: flex;
  align-items: center;
}
.icon-plus {
  margin-right: 5px;
}
.form-input {
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.list-items td {
  font-size: 24px;
}
</style>
