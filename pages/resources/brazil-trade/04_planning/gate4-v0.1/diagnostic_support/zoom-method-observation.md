# Validation-method correction

The first supplemental check used root CSS zoom=2 at unchanged media-query width. It produced overflow and is not browser layout zoom; that attempted assertion was rejected as an invalid method. No source or design change was made. The corrected check records 720x450 layout viewport as a LOCAL_SIMULATION of a 1440x900 desktop at 200% browser zoom. It does not claim a native browser zoom or screen-reader test.
