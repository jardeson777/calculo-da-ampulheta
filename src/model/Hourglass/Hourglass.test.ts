import Hourglass from "./Hourglass";

describe("Hourglass", () => {
    it('should return error if value input to less of 20', () => {
        const valueInput = 19;
        let haveError = false;

        try{
            const hourglassClass = new Hourglass(valueInput);
        } catch (e) {
            haveError = true;
        }

        expect(haveError).toBeTruthy();
    });

    it('should return string if value input to bigger then 19', () => {
        const valueInput = 21;
        const hourglassClass = new Hourglass(valueInput);
        const hourglass = hourglassClass.getHourglass('bottom');

        expect(hourglass.length > 0).toBeTruthy();
    });
});