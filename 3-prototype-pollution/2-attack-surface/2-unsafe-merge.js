function merge(target, source) {
    for (var attr in source) {
        if (typeof(target[attr]) === "object" &&
            typeof(source[attr]) === "object") {
            merge(target[attr], source[attr]);
        } else {
            target[attr] = source[attr];
        }
    }
    return target;
};

