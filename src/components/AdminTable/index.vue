<template>
  <div class="admin-table">
    <header class="table-header">
      <h1>Table Heading</h1>
    </header>
    <div class="tabs-container">
      <nav class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab"
          :class="{ active: activeTab === tab }"
          @click="setActiveTab(tab)"
        >
          {{ tab }}
        </button>
      </nav>
      <div class="header-actions">
        <span class="payable-text">
          <span class="pay-text"> Total payable amount:</span>
          <span class="payable-amount"
            ><span class="payable-color">${{ totalPayable.toFixed(2) }}</span>
            USD</span
          >
        </span>
      </div>
    </div>

    <div class="border">
      <div class="search-actions-container">
        <div class="filter-search-group">
          <div class="filter-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="filter-funnel-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 4.5h18M8.25 9h7.5M10.5 13.5h3M12 16.5v3"
              />
            </svg>
            Filter
          </div>
          <div v-if="showFilterDropdown" class="filter-dropdown">
            <!-- Sort By Section -->
            <div class="filter-section">
              <span class="filter-title">SORT BY:</span>
              <div
                v-for="(option, index) in sortOptions"
                :key="index"
                class="filter-option"
              >
                <input
                  type="radio"
                  :id="'sort-' + option.value"
                  :value="option.value"
                  v-model="selectedSort"
                  @change="applyFilters"
                />
                <label :for="'sort-' + option.value">{{ option.label }}</label>
              </div>
            </div>

            <!-- Users Section -->
            <div class="filter-section">
              <span class="filter-title">USERS:</span>
              <div
                v-for="(option, index) in userOptions"
                :key="index"
                class="filter-option"
              >
                <input
                  type="radio"
                  :id="'user-' + option.value"
                  :value="option.value"
                  v-model="selectedUser"
                  @change="applyFilters"
                />
                <label :for="'user-' + option.value">{{ option.label }}</label>
              </div>
            </div>
          </div>
          <div class="search-container">
            <div class="search-bar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="search-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 11-10.607-10.607 7.5 7.5 0 0110.607 10.607z"
                />
              </svg>
              <input
                type="text"
                class="search-input"
                v-model="searchQuery"
                placeholder="Search Users by Name, Email or Date"
              />
            </div>
          </div>
        </div>
        <button
          class="pay-dues-btn"
          :disabled="selectedRows.length === 0"
          @click="markSelectedAsPaid"
        >
          Pay Dues
        </button>
      </div>

      <table class="user-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" @change="toggleSelectAll" />
            </th>
            <th>Name</th>
            <th>User Status</th>
            <th>Payment Status</th>
            <th>Amount</th>
            <th>Actions</th>
            <th>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-ellipsis-v"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                />
              </svg>
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="user in currentPageUsers" :key="user.id">
            <tr>
              <td>
                <input
                  type="checkbox"
                  :checked="selectedRows.includes(user.id)"
                  @change="toggleRowSelection(user.id)"
                />
              </td>
              <td>
                <div class="user-info" @click="toggleRowDetails(user.id)">
                  <div class="user-name">
                    {{ user.firstName }} {{ user.lastName }}
                  </div>
                  <div class="user-email">{{ user.email }}</div>
                </div>
              </td>
              <td>
                <div class="status-container">
                  <div
                    class="payment-status-container payment-active"
                    :class="user.status.toLowerCase()"
                  >
                    <span class="payment-status-dot"></span>
                    <span>{{ user.status }}</span>
                  </div>
                  <div class="last-login">
                    Last login:
                    {{
                      new Date(user.lastLogged).toLocaleDateString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    }}
                  </div>
                </div>
              </td>
              <td>
                <div
                  class="payment-status-container payment-status"
                  :class="user.paymentStatus.toLowerCase()"
                >
                  <span class="payment-status-dot"></span>
                  <span>{{ user.paymentStatus }}</span>
                </div>
                <div class="payment-date">
                  {{
                    user.paymentStatus === "Paid" && user.paidOn
                      ? `Paid on ${new Date(user.paidOn).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}`
                      : user.paymentStatus === "Due" && user.dueOn
                      ? `Due on ${new Date(user.dueOn).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}`
                      : "No payment information available"
                  }}
                </div>
              </td>
              <td>
                <div class="amount-container">
                  <div class="amount-value">${{ user.amount }}</div>
                  <div class="amount-currency">USD</div>
                </div>
              </td>
              <td>
                <button class="details-btn" @click="toggleRowDetails(user.id)">
                  {{
                    expandedRows.includes(user.id)
                      ? "Hide Details"
                      : "View More"
                  }}
                </button>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-ellipsis-v"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                  />
                </svg>
              </td>
            </tr>

            <tr v-if="expandedRows.includes(user.id)">
              <td class="details-column">
                {{
                  new Date(user.lastLogged).toLocaleDateString("en-US", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                }}
              </td>
              <td class="details-column">{{ user.activityDetails }}</td>
              <td class="details-column">{{ user.details }}</td>
            </tr>
          </template>
        </tbody>
      </table>
      <div class="pagination-controls">
        <span>Rows per page:</span>
        <span class="page-info">
          {{ startIndex + 1 }}-{{ endIndex }} of
          {{ filteredAndSortedUsers.length }}
        </span>
        <div
          class="pagination-btn"
          :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.354 3.646a.5.5 0 0 1 0 .708L6.707 8l4.647 4.646a.5.5 0 0 1-.708.708L5 8.707a.5.5 0 0 1 0-.708l5.646-5.647a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
        <div
          class="pagination-btn"
          :disabled="currentPage === totalPages"
          @click="changePage(currentPage + 1)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.646 3.646a.5.5 0 0 1 .708 0L9.293 8 4.646 12.646a.5.5 0 0 1-.708-.708L8.293 8 4.646 4.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onBeforeUnmount,
  computed,
} from "vue";
import { useUserStore } from "@/store/userStore";
import {
  FilterIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/vue/20/solid";
import "./styles.css";

export default defineComponent({
  setup() {
    const userStore = useUserStore();
    const toggleFilterDropdown = () => {
      showFilterDropdown.value = !showFilterDropdown.value;
    };

    const closeFilterDropdown = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".filter-search-group")) {
        showFilterDropdown.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener("click", closeFilterDropdown);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", closeFilterDropdown);
    });
    const showFilterDropdown = ref(false);
    const tabs = ["All", "Paid", "Unpaid", "Overdue"];
    const activeTab = ref("All");
    const searchQuery = ref("");
    const expandedRows = ref<number[]>([]);
    const selectedRows = ref<number[]>([]);

    const currentPage = ref(1);
    const rowsPerPage = 10;

    const setActiveTab = (tab: string) => {
      activeTab.value = tab;
    };

    const toggleRowDetails = (id: number) => {
      const index = expandedRows.value.indexOf(id);
      if (index > -1) {
        expandedRows.value.splice(index, 1);
      } else {
        expandedRows.value.push(id);
      }
    };

    const toggleRowSelection = (id: number) => {
      const index = selectedRows.value.indexOf(id);
      if (index > -1) {
        selectedRows.value.splice(index, 1);
      } else {
        selectedRows.value.push(id);
      }
    };

    const toggleSelectAll = (event: Event) => {
      const checkbox = event.target as HTMLInputElement;
      selectedRows.value = checkbox.checked
        ? filteredAndSortedUsers.value
            .slice(startIndex, endIndex)
            .map((user) => user.id)
        : [];
    };

    const markSelectedAsPaid = () => {
      selectedRows.value.forEach((id) => userStore.markAsPaid(id));
      selectedRows.value = [];
    };

    const filteredAndSortedUsers = computed(() => {
      let users = userStore.users;

      if (activeTab.value !== "All") {
        users = users.filter((user) => user.paymentStatus === activeTab.value);
      }

      if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase();
        users = users.filter(
          (user) =>
            user.firstName.toLowerCase().includes(query) ||
            user.lastName.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query)
        );
      }

      return users;
    });

    const totalPayable = computed(() => {
      return userStore.users
        .filter(
          (user) =>
            user.paymentStatus === "Unpaid" || user.paymentStatus === "Overdue"
        )
        .reduce((sum, user) => sum + user.amount, 0);
    });

    const startIndex = computed(() => (currentPage.value - 1) * rowsPerPage);
    const endIndex = computed(() => currentPage.value * rowsPerPage);

    const currentPageUsers = computed(() => {
      return filteredAndSortedUsers.value.slice(
        startIndex.value,
        endIndex.value
      );
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredAndSortedUsers.value.length / rowsPerPage);
    });

    const changePage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };

    return {
      tabs,
      activeTab,
      searchQuery,
      expandedRows,
      selectedRows,
      filteredAndSortedUsers,
      totalPayable,
      setActiveTab,
      toggleRowDetails,
      toggleRowSelection,
      toggleSelectAll,
      markSelectedAsPaid,
      currentPageUsers,
      startIndex,
      endIndex,
      totalPages,
      currentPage,
      changePage,
      showFilterDropdown,
      toggleFilterDropdown,
    };
  },
});
</script>
