export const ordersData = {
  success: true,
  message: "Order Metrics Fetched",
  data: {
    todayOrders: {
      count: 0,
      amount: {
        orderAmount: "0.00",
        gatewayAmount: "0.00",
        platformFee: "0.00",
      },
    },
    weeklyOrders: {
      count: 0,
      amount: {
        orderAmount: "0.00",
        gatewayAmount: "0.00",
        platformFee: "0.00",
      },
    },
    monthlyOrders: {
      count: 0,
      amount: {
        orderAmount: "0.00",
        gatewayAmount: "0.00",
        platformFee: "0.00",
      },
    },
    prescriptionMetrics: [
      { _count: 479, status: "PENDING" },
      { _count: 134, status: "ORDER_BY_PRESCRIPTION" },
      { _count: 837, status: "APPROVED" },
      { _count: 262, status: "REJECTED" },
    ],
    ordersByStatus: [
      {
        _count: 8,
        _sum: {
          orderAmount: 1608.65,
          gatewayAmount: 1658.165,
          platformFee: 0.62,
        },
        orderStatus: "REJECTED_BY_DELIVERY_BOY",
      },
      {
        _count: 5,
        _sum: {
          orderAmount: 18811.535,
          gatewayAmount: 18810.454568,
          platformFee: 0,
        },
        orderStatus: "OUT_FOR_DELIVERY",
      },
      {
        _count: 285,
        _sum: {
          orderAmount: 151387.7885,
          gatewayAmount: 143338.404197,
          platformFee: 640.0200000000003,
        },
        orderStatus: "PAYMENT_PENDING",
      },
      {
        _count: 365,
        _sum: {
          orderAmount: 84356.5695,
          gatewayAmount: 79717.58367799997,
          platformFee: 868.6300000000007,
        },
        orderStatus: "DELIVERED",
      },
      {
        _count: 39,
        _sum: {
          orderAmount: 21235.29,
          gatewayAmount: 19681.30512,
          platformFee: 55.63,
        },
        orderStatus: "REJECTED_BY_RETAILER",
      },
      {
        _count: 24,
        _sum: {
          orderAmount: 3782.161,
          gatewayAmount: 3699.502150000001,
          platformFee: 138.93,
        },
        orderStatus: "PRESCRIPTION_REUPLOAD",
      },
      {
        _count: 7,
        _sum: {
          orderAmount: 2513.14,
          gatewayAmount: 2102.10544,
          platformFee: 19.32,
        },
        orderStatus: "REFUND_INITIATED",
      },
      {
        _count: 2,
        _sum: {
          orderAmount: 42.08,
          gatewayAmount: 59.98,
          platformFee: 20,
        },
        orderStatus: "SHIPPED",
      },
      {
        _count: 10,
        _sum: {
          orderAmount: 560,
          gatewayAmount: 429.25,
          platformFee: 2.22,
        },
        orderStatus: "REFUND_COMPLETED",
      },
      {
        _count: 543,
        _sum: {
          orderAmount: 211845.6049999998,
          gatewayAmount: 198097.7902589997,
          platformFee: 1327.32,
        },
        orderStatus: "PLACED",
      },
      {
        _count: 8,
        _sum: {
          orderAmount: 12607.6,
          gatewayAmount: 11944.63205,
          platformFee: 0,
        },
        orderStatus: "REJECTED_BY_SUPER_ADMIN",
      },
      {
        _count: 63,
        _sum: {
          orderAmount: 14868.655,
          gatewayAmount: 17804.950691,
          platformFee: 0,
        },
        orderStatus: "CANCELED",
      },
      {
        _count: 11,
        _sum: {
          orderAmount: 3746.09,
          gatewayAmount: 2907.42384,
          platformFee: 67.44,
        },
        orderStatus: "PRESCRIPTION_REUPLOADED",
      },
      {
        _count: 44,
        _sum: {
          orderAmount: 16087.21,
          gatewayAmount: 13609.901636,
          platformFee: 205.67,
        },
        orderStatus: "PRESCRIPTION_APPROVED",
      },
      {
        _count: 21,
        _sum: {
          orderAmount: 6262.384999999999,
          gatewayAmount: 5212.421013,
          platformFee: 63.38,
        },
        orderStatus: "PRESCRIPTION_REJECTED",
      },
      {
        _count: 48,
        _sum: {
          orderAmount: 10321.47,
          gatewayAmount: 10024.5059,
          platformFee: 112.36,
        },
        orderStatus: "CONFIRMED_BY_RETAILER",
      },
    ],
    totalDelayedOrders: 73,
    placedOrderCountAmount: {
      count: 431,
      amount: {
        orderAmount: "135963.13",
        gatewayAmount: "129209.56",
        platformFee: "1532.99",
      }
    },
    placedWarehouseOrderCountAmount: {
      count: 156,
      orderAmount: "91969.69",
      gatewayAmount: "82498.13",
      platformFee: "0.00",
    },
  },
};
