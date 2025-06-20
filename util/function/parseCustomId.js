function paresCustomId(customId) {
    if (!customId ||typeof customId !== 'string') {
        return {
            isValid:false,
            error:'Invalid customId: must be non-empty string'
        };
    }
    const parts = customId.split('_');
    if(parts.length < 2) {
        return {
            isValid:false,
            error:"Invalid format: customId must contain at least one underscore"
        };
    }
    const result = {
        isValid:true,
        prefix:parts[0],
        segments:parts.slice(1),
        fullId:customId,
        totalSegments:parts.length - 1
    };
if (parts[0] === 'vid1') {
    result.type = 'Interview';
    result.governorate = parts[1] || null;
    result.town = parts[2] || null;
    result.who = parts[3] || null
}
return {
    data:result,
    isID(id) {
return result.isValid && result.prefix === id;
    }
}
};
module.exports = paresCustomId
const ss = paresCustomId('vid1_1_1_1');
console.log(ss)