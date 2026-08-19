const dates = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);

    return {
        date,
        label:
            index === 0
                ? "Today"
                : index === 1
                    ? "Tomorrow"
                    : date.toLocaleDateString("en-IN", {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                    }),
    };
});

export default dates;