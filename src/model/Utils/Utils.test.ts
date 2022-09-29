import Utils from "./Utils";

describe("Utils", () => {
    it('replaceAt should return true if the indicated location is switched correctly', () => {
        const input = "teste";
        const indexForChange = 4;
        const stringOfChande = "a"

        const result = Utils.replaceAt(input, indexForChange, stringOfChande);

        expect(result).toEqual("testa");
    });

    it('replaceAtTwoSides should return true if the indicated location is switched correctly in both sides', () => {
        const input = "12345";
        const indexForChange = 0;
        const stringOfChande = "0"

        const result = Utils.replaceAtTwoSides(input, indexForChange, stringOfChande);

        expect(result).toEqual("02340");
    });
});