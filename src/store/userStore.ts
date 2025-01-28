import { defineStore } from "pinia";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  paymentStatus: "Paid" | "Unpaid" | "Overdue";
  amount: number;
  details: string;
  status: "Active" | "Inactive";
  lastLogged: Date | null;
  paidOn: Date | null;
  dueOn: Date | null;
  activityDetails: string;
}

export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        paymentStatus: "Unpaid",
        amount: 100,
        details: "John's details...",
        status: "Active",
        lastLogged: new Date("2025-01-20"),
        paidOn: null,
        dueOn: new Date("2025-01-30"),
        activityDetails: "Logged in",
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        paymentStatus: "Paid",
        amount: 250,
        details: "Jane's details...",
        status: "Active",
        lastLogged: new Date("2025-01-25"),
        paidOn: new Date("2025-01-20"),
        dueOn: null,
        activityDetails: "Logged in",
      },
      {
        id: 3,
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        paymentStatus: "Overdue",
        amount: 50,
        details: "Alice's details...",
        status: "Inactive",
        lastLogged: new Date("2025-01-18"),
        paidOn: null,
        dueOn: new Date("2025-01-15"),
        activityDetails: "Logged in",
      },
      {
        id: 4,
        firstName: "Bob",
        lastName: "Brown",
        email: "bob.brown@example.com",
        paymentStatus: "Paid",
        amount: 300,
        details: "Bob's details...",
        status: "Active",
        lastLogged: new Date("2025-01-23"),
        paidOn: new Date("2025-01-19"),
        dueOn: null,
        activityDetails: "Logged in",
      },
      {
        id: 5,
        firstName: "Charlie",
        lastName: "Davis",
        email: "charlie.davis@example.com",
        paymentStatus: "Unpaid",
        amount: 150,
        details: "Charlie's details...",
        status: "Active",
        lastLogged: new Date("2025-01-21"),
        paidOn: null,
        dueOn: new Date("2025-01-28"),
        activityDetails: "Logged in",
      },
      {
        id: 6,
        firstName: "David",
        lastName: "Miller",
        email: "david.miller@example.com",
        paymentStatus: "Unpaid",
        amount: 120,
        details: "David's details...",
        status: "Active",
        lastLogged: new Date("2025-01-19"),
        paidOn: null,
        dueOn: new Date("2025-01-25"),
        activityDetails: "Logged in",
      },
      {
        id: 7,
        firstName: "Eva",
        lastName: "Martinez",
        email: "eva.martinez@example.com",
        paymentStatus: "Paid",
        amount: 150,
        details: "Eva's details...",
        status: "Active",
        lastLogged: new Date("2025-01-22"),
        paidOn: new Date("2025-01-18"),
        dueOn: null,
        activityDetails: "Logged in",
      },
      {
        id: 8,
        firstName: "Frank",
        lastName: "Wilson",
        email: "frank.wilson@example.com",
        paymentStatus: "Overdue",
        amount: 80,
        details: "Frank's details...",
        status: "Inactive",
        lastLogged: new Date("2025-01-15"),
        paidOn: null,
        dueOn: new Date("2025-01-10"),
        activityDetails: "Logged in",
      },
      {
        id: 9,
        firstName: "Grace",
        lastName: "Moore",
        email: "grace.moore@example.com",
        paymentStatus: "Paid",
        amount: 200,
        details: "Grace's details...",
        status: "Active",
        lastLogged: new Date("2025-01-26"),
        paidOn: new Date("2025-01-19"),
        dueOn: null,
        activityDetails: "Logged in",
      },
      {
        id: 10,
        firstName: "Henry",
        lastName: "Taylor",
        email: "henry.taylor@example.com",
        paymentStatus: "Unpaid",
        amount: 270,
        details: "Henry's details...",
        status: "Active",
        lastLogged: new Date("2025-01-20"),
        paidOn: null,
        dueOn: new Date("2025-01-30"),
        activityDetails: "Logged in",
      },
      {
        id: 11,
        firstName: "Ivy",
        lastName: "Clark",
        email: "ivy.clark@example.com",
        paymentStatus: "Unpaid",
        amount: 90,
        details: "Ivy's details...",
        status: "Active",
        lastLogged: new Date("2025-01-24"),
        paidOn: null,
        dueOn: new Date("2025-01-31"),
      },
      {
        id: 12,
        firstName: "Jack",
        lastName: "Adams",
        email: "jack.adams@example.com",
        paymentStatus: "Overdue",
        amount: 200,
        details: "Jack's details...",
        status: "Inactive",
        lastLogged: new Date("2025-01-17"),
        paidOn: null,
        dueOn: new Date("2025-01-10"),
        activityDetails: "Logged in",
      },
      {
        id: 13,
        firstName: "Lily",
        lastName: "Roberts",
        email: "lily.roberts@example.com",
        paymentStatus: "Paid",
        amount: 180,
        details: "Lily's details...",
        status: "Active",
        lastLogged: new Date("2025-01-25"),
        paidOn: new Date("2025-01-20"),
        dueOn: null,
        activityDetails: "Logged in",
      },
      {
        id: 14,
        firstName: "Mason",
        lastName: "Lopez",
        email: "mason.lopez@example.com",
        paymentStatus: "Unpaid",
        amount: 110,
        details: "Mason's details...",
        status: "Active",
        lastLogged: new Date("2025-01-22"),
        paidOn: null,
        dueOn: new Date("2025-01-30"),
        activityDetails: "Logged in",
      },
      {
        id: 15,
        firstName: "Nina",
        lastName: "Harris",
        email: "nina.harris@example.com",
        paymentStatus: "Overdue",
        amount: 220,
        details: "Nina's details...",
        status: "Inactive",
        lastLogged: new Date("2025-01-18"),
        paidOn: null,
        dueOn: new Date("2025-01-12"),
        activityDetails: "Logged in",
      },
    ] as User[],
  }),
  actions: {
    markAsPaid(id: number) {
      const user = this.users.find((u) => u.id === id);
      if (user) {
        user.paymentStatus = "Paid";
        user.paidOn = new Date();
        user.dueOn = null;
      }
    },
    markAsInactive(id: number) {
      const user = this.users.find((u) => u.id === id);
      if (user) user.status = "Inactive";
    },
    markAsActive(id: number) {
      const user = this.users.find((u) => u.id === id);
      if (user) user.status = "Active";
    },
  },
});
