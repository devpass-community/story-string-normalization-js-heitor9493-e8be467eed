function removeAccent(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");;
}

console.log(removeAccent("São paulo"));

// module.exports = removeAccent;
