import { describe, expect, it } from "vitest";

describe("truthiness", () => {

    describe("sanity check", () => {
        it("should pass", () => {
            expect(true).toBeTruthy();
            expect(false).toBeFalsy();
        });
    });

    describe("looseComparison", () => {
        it("should compare loosely", () => {
            // Obvious cases
            expect(1 == 1).toBeTruthy();
            expect(1 == 0).toBeFalsy();

            // Edge cases
            // 1. Does 0 equal false?
            // expect(0 == false)
            // // 2. Does "0" equal 0?
            // expect("0" == 0)
            // // 3. Does "0" equal false?
            // expect("0" == false)
            // // 4. Does "" equal "0"?
            // expect("" == "0")
            // // 5. Does "" equal false?
            // expect("" == false)
            // // 6. Does "0" equal true?
            // expect("0" == true)
            // // 7. Does 0 equal false?
            // expect(0 == false)
            // // 8. Does "0" equal []?
            // expect("0" == [])
            // // 9. Does false equal []?
            // expect(true == [])
            // // 10. Does 1 equal []?
            // expect(1 == [])
            // // 11. Does 0 equal []?
            // expect(0 == [])
        });
    });

    describe.skip("strictComparison", () => {
        it("should compare strictly", () => {
            // Truthy primitive comparisons
            expect(1 === 1);
            expect("" === "");
            expect("0" === "0");
            expect(false === false);
            expect(null === null);
            expect({}.a === [][0]);
            expect({}.a === undefined);
            expect([][0] === undefined);
            expect({key: 1}.key === 1);
            expect([1][0] === 1);

            // Falsy primitive comparisons
            expect(undefined === null);
            expect(1 === 0);
            expect("1" === 1);
            expect("0" === 0);
            expect("0" === false);
            expect("0" === true);
            expect("" === "0");
            expect("" === false);
            expect(0 === false);

            expect("0" === []);
            expect(true === []);
            
            // Edge cases
            expect(new String("0") === new String("0"));
            expect(new Array("0") === new Array("0"));
            expect([] === []);
            expect({} === {});
            expect(NaN === NaN);
        });
    });

    describe.skip("returnLogicalOrShortCircuit", () => {
        const evaluationDidNotShortCircuit = () => {
            console.log("Evaluation did not short circuit");
            return false;
        };
        it("should short circuit", () => {
            // Logical && examples
            expect(true && evaluationDidNotShortCircuit());
            expect(null && evaluationDidNotShortCircuit());
            expect([] && evaluationDidNotShortCircuit());
            expect([1, 2, 3] && evaluationDidNotShortCircuit());
            expect([].length && evaluationDidNotShortCircuit());
            expect([0, 1, 2].length && evaluationDidNotShortCircuit());
            expect({key: "value"}.key && evaluationDidNotShortCircuit());
            expect({key: "wrong value"}.key === "correct value" && evaluationDidNotShortCircuit());
            expect({}.key && evaluationDidNotShortCircuit());

            // Logical || examples
            expect(false || evaluationDidNotShortCircuit());
            expect([].length || evaluationDidNotShortCircuit());
            expect([1, 2, 3] || evaluationDidNotShortCircuit());
            expect("" || evaluationDidNotShortCircuit());
            expect("0" || evaluationDidNotShortCircuit());
            expect("false" || evaluationDidNotShortCircuit());
            expect("my string" !== "expected string" || evaluationDidNotShortCircuit());
            expect(0 || evaluationDidNotShortCircuit());
        });
    });

});