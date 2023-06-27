import { greet } from "./main";

describe("greet", () => {
    it("should greet a person by name", () => {
        const result = greet("World");
        expect(result).toEqual("Hello World!");
    });
});