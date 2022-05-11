
module.exports={
    create(context){
        return{
            CallExpression(node){
                if(node.callee.name==='getPayment'){
                    context.report({
                        node:node,
                        message:'getPayment is deprecated use instead getLatestPayment'
                    });
                }
            }
        };
    }
};