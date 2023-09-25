import { getMonth } from "./index";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function returns 'janvier' for the date '2022-01-01'", () => {
            const date = new Date("2022-01-01");
            const month = getMonth(date);
            expect(month).toBe("janvier");
        });

        it("the function returns 'juillet' for the date '2022-06-01'", () => {
            const date = new Date("2022-06-01");
            const month = getMonth(date);
            expect(month).toBe("juin");
        });

        it("the function returns 'decembre' for the date '2022-12-01'", () => {
            const date = new Date("2022-12-01");
            const month = getMonth(date);
            expect(month).toBe("décembre");
        });
    });
});
