import mod from "../index";

export default {
    plugins: {
        "@eslint-react": mod,
    },
    rules: mod.configs["recommended-type-checked"].rules,
};