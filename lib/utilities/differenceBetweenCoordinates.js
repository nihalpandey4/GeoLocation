"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (lat1, lon1, lat2, lon2) => {
    try {
        if (!lat1 || !lon1 || !lat2 || !lon2)
            throw new Error("all params are mandatory");
        const R = 6371; // Radius of the earth in km
        let dLat = deg2rad(lat2 - lat1); // deg2rad below
        let dLon = deg2rad(lon2 - lon1);
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c; // Distance in km
        return d;
    }
    catch (err) {
        throw err;
    }
};
const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
};
