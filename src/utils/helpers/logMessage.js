/**
 * ЛОГУВАННЯ В КОНСОЛІ
 * @param {"error" | "warn" | "info"} type
 * @param {string} message
 * @param {any} body
 * @returns {ImageData}
 */
export const logMessage = (type = "info", message, body) => {
  const colors = {
    error: "red",
    warn: "orange",
    info: "wheat",
  };
  console.log(
    `%c${message}`,
    `background: ${colors[type]}; color: black; font-weight:700; padding: 0 4px;`,
    body ?? " "
  );
};
