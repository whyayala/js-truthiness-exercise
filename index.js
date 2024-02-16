export const looseComparison = (a, b) => {
    return a == b;
};

export const strictComparison = (a, b) => {
    return a === b;
};

export const doubleNegatedCoercion = (a) => {
    return !!a;
};

export const isTruthy = (a) => {
    return Boolean(a);
};

export const isFalsy = (a) => {
    return !a;
};

export const returnValueIfTruthyTernary = (a) => {
    return a ? a : null;
};

export const returnLogicalOrShortCircuit = (a) => {
    return a || evaluationDidNotShortCircuit();
};

export const returnLogicalAndShortCircuit = (a) => {
    return a && evaluationDidNotShortCircuit();
};

const evaluationDidNotShortCircuit = () => {
    console.log("Evaluation did not short circuit");
    return null;
};