const WidgetQueries = `
    widgets(id: ID, type: String, size: String, color: String, quantity: Int): [Widget]
`;

module.exports = WidgetQueries;
