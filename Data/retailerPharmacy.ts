export const retailerPharmacyData = {
  success: true,
  message: "Retailer and Pharmacy metrics fetched successfully",
  data: {
    today: {
      prescriptionsPending: 0,
      orderByPrescription: 0,
      approvedPrescriptions: 1,
      retailerPending: 0,
      retailerConfirmed: 0,
      outForDelivery: 0,
      delivered: 0,
    },
    allTime: {
      prescriptionsPending: 48,
      orderByPrescription: 134,
      approvedPrescriptions: 837,
      retailerPending: 431,
      retailerConfirmed: 44,
      outForDelivery: 5,
      delivered: 342,
      allTimeRejectedPrescriptions: 262,
      allTimeRejectedOrders: 37,
    },
  },
};
