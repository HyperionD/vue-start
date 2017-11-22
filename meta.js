module.exports = {
    "helpers": {
        "if_or": function (v1, v2, options) {
            if (v1 || v2) {
                return options.fn(this);
            }

            return options.inverse(this);
        }
    },
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "Project name"
        },
        "description": {
            "type": "string",
            "required": false,
            "message": "Project description",
            "default": "A Vue.js project"
        },
        "author": {
            "type": "string",
            "message": "Author"
        },
        "router": {
            "type": "confirm",
            "message": "Use vue-router?"
        },
        "vuex": {
            "type": "confirm",
            "message": "Use vuex?"
        }
    },
    "filters": {
        ".eslintrc.js": "lint",
        ".eslintignore": "lint",
        "config/test.env.js": "unit || e2e",
        "build/webpack.test.conf.js": "e2e || (unit && runner === 'karma')",
        "test/unit/**/*": "unit",
        "test/unit/index.js": "unit && runner === 'karma'",
        "test/unit/jest.conf.js": "unit && runner === 'jest'",
        "test/unit/karma.conf.js": "unit && runner === 'karma'",
        "test/unit/specs/index.js": "unit && runner === 'karma'",
        "test/unit/setup.js": "unit && runner === 'jest'",
        "test/e2e/**/*": "e2e",
        "src/router/**/*": "router"
    },
    "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n"
};
