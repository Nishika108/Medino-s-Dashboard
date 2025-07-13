export const usersData = {
  success: true,
  message: "User Metrics Fetched",
  data: {
    totalUsers: 178,
    newUsers: {
      today: 0,
      thisWeek: 6,
      thisMonth: 0,
    },
    userByRole: [
      { _count: 18, role: "GENERAL" },
      { _count: 160, role: "USER" },
    ],
    totalAdmins: 68,
    newAdmins: {
      today: 0,
      thisWeek: 0,
      thisMonth: 0,
    },
    adminsByRole: [
      { _count: 31, role: "DOCTOR_ADMIN" },
      { _count: 1, role: "PHARMACY_ADMIN" },
      { _count: 2, role: "PRODUCT_ADMIN" },
      { _count: 1, role: "ANALYTICS_ADMIN" },
      { _count: 3, role: "DISCOUNT_ADMIN" },
      { _count: 2, role: "SUPER_ADMIN" },
      { _count: 15, role: "RETAILER_ADMIN" },
      { _count: 2, role: "SALES_ADMIN" },
      { _count: 1, role: "DELIVERY_ADMIN" },
      { _count: 6, role: "WAREHOUSE_ADMIN" },
      { _count: 4, role: "DOCTOR_MASTER" },
    ],
  },
};
