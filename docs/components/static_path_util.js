const typePath = {
    cpp: "/cpp",
    html: "/html",
    img: "/img"
}

function cppPathMap() {
    const _root = typePath.cpp;
    const _algorithm = "/algorithm";
    const _rootPrefix = (str) => _root + "/" + str;
    const _algorithmPrefix = (str) => _rootPrefix(_algorithm) + "/" + str;

    return {
        treePath: _algorithmPrefix("tree.h")
    };
}

const STATIC_PATH_UTIL = {
    cpp: cppPathMap()
}
export default STATIC_PATH_UTIL;