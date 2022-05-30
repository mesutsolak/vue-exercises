const app = new Vue({
  el: "#app",
  name: "Remote Course",
  data: {
    taskAddItem: {
      text: "",
      status: false,
    },
    categoryAddItem: {},
    taskItemList: [
      { id: 1, text: "Ders notlarını hazırla", status: true, categoryItemId: 2 },
      {
        id: 2,
        text: "İntrol videosunu hazırla",
        status: false,
        categoryItemId: 2,
      },
      { id: 3, text: "Kahve al", status: false, categoryItemId: 1 },
      { id: 4, text: "Meyve suyu al", status: false, categoryItemId: 3 },
    ],
    categoryItemList: [
      { id: 1, title: "Genel" },
      { id: 2, title: "İş" },
      { id: 3, title: "Özel" },
    ],
    selectedcategoryItem: { id: 0, title: "" },
    filteredTaskItemList: [],
  },
  created() {
    const defaultCategoryItem = this.categoryItemList[0];
    if (defaultCategoryItem != null) {
      this.changeCategoryItem(defaultCategoryItem.id);
    }
  },
  methods: {
    toggleNotCompletedTaskListStatus(index) {
      this.notCompletedTaskList[index].status =
        !this.notCompletedTaskList[index].status;
    },
    toggleCompletedTaskListStatus(index) {
      this.completedTaskList[index].status = !this.completedTaskList[index].status;
    },
    saveTaskItem() {
      if (this.taskAddItem.text !== "") {
        this.taskAddItem.id = this.taskItemList.length + 1;
        this.taskAddItem.categoryItemId = this.selectedCategoryItem.id;
        this.taskItemList.push(this.taskAddItem);
        this.taskAddItemClear();
        this.changeCategoryItem(this.selectedCategoryItem.id);
      }
    },
    taskAddItemClear() {
      this.taskAddItem = { text: "", status: false };
    },
    taskDeleteItem(selectedTaskItem) {
      this.taskItemList = this.taskItemList.filter(
        (taskItem) => taskItem.id != selectedTaskItem.id
      );
      this.filteredTaskItemList = this.filteredTaskItemList.filter(
        (filteredTaskItem) => filteredTaskItem.id != selectedTaskItem.id
      );
    },
    changeCategoryItem(categoryId) {
      const foundCategoryItem = this.categoryItemList.find(
        (categoryItem) => categoryItem.id === categoryId
      );
      if (foundCategoryItem != null) {
        this.selectedCategoryItem = foundCategoryItem;
        this.filteredTaskItemList = this.taskItemList.filter(
          (taskItem) => taskItem.categoryItemId === foundCategoryItem.id
        );
      }
    },
    saveCategoryItem() {
      if (this.categoryAddItem.title != null) {
        this.categoryAddItem.id = this.categoryItemList.length + 1;
        this.categoryItemList.push(this.categoryAddItem);
        this.categoryAddItem = {};
      }
    },
    categoryItemListCount(categoryId) {
      return this.taskItemList.filter(
        (taskItem) => taskItem.categoryItemId === categoryId
      ).length;
    },
  },
  computed: {
    notCompletedTaskList() {
      return this.filteredTaskItemList.filter(
        (filteredTaskItem) => !filteredTaskItem.status
      );
    },
    completedTaskList() {
      return this.filteredTaskItemList.filter(
        (filteredTaskItem) => filteredTaskItem.status
      );
    },
  },
});
