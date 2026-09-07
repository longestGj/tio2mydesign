const fs=require('fs');
const common=fs.readFileSync('D:/23MySec/pages/markets/belgium/05_review/gate4-complete-independent-v1.0/review.cjs','utf8');
const helpers=common.slice(common.indexOf('const rgb='),common.indexOf('const shots='));
fs.writeFileSync(__dirname+'/control-measurement.cjs',helpers+'\nmodule.exports={controls,measure,contrast};\n');
