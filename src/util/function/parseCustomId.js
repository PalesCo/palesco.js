function paresCustomId(customId) {
    if (!customId ||typeof customId !== 'string') {
        return {
            data: {
                isValid:false,
                error:'Invalid customId: must be non-empty string'
            }
        };
    }
    const parts = customId.split('_');
    if(parts.length < 2) {
        return {
            data:{
                isValid:false,
                error:"Invalid format: customId must contain at least one underscore"
            }
        };
    }
    const result = {
        isValid:true,
        prefix:parts[0],
        segments:parts.slice(1),
        fullId:customId,
        totalSegments:parts.length - 1
    };
    const interview = {

    }
if (parts[0] === 'vid1') {
    interview.type = 'Interview';
    interview.governorate = parts[1] || null;
    interview.town = parts[2] || null;
    interview.who = parts[3] || null
}
return {
    data:result,
    interview:interview,
    isID(id) {
return result.isValid && result.prefix === id;
    }
}
};
module.exports = paresCustomId