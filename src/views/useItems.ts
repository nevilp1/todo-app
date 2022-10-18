import { ref } from "vue";

export function useItems() {
  const toDoList = ref<string[]>([]);
  const newItem = ref<string>("");
  const message = ref<string>("");

  const addItem = () => {
    if (newItem.value === "") {
      message.value = "Please type the name of the item first";
    } else if (toDoList.value.includes(newItem.value)) {
      message.value = `Item "${newItem.value}" already exist`;
    } else {
      toDoList.value.push(newItem.value);
      message.value = `Item "${newItem.value}" successfully added`
      newItem.value = "";
    }

    setTimeout(() => {
      message.value = ""
    }, 5000)
  };

  const removeItem = (index: number) => {
    toDoList.value.splice(index, 1);
  };

  return { addItem, removeItem, toDoList, newItem, message };
}
