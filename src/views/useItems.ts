import { ref } from "vue";

export function useItems() {
  const toDoList = ref<string[]>([]);
  const newItem = ref<string>("");

  const addItem = () => {
    if (newItem.value === "") {
      alert("Please type name of the item first");
    } else if (toDoList.value.includes(newItem.value)) {
      alert(`Item "${newItem.value}" already exist`);
    } else {
      toDoList.value.push(newItem.value);
      newItem.value = "";
    }
  };

  const removeItem = (index: number) => {
    toDoList.value.splice(index, 1);
  };

  return { addItem, removeItem, toDoList, newItem };
}
