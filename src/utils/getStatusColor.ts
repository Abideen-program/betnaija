export const grantStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "draft":
      return "#0FC2DE";
    case "submitted":
      return "#DEC20F";
    case "disbursed":
      return "#136648";
    case "declined":
      return "red";
    default:
      return "#B7C2D0";
  }
};
