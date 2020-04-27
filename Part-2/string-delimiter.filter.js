angular.module("myString")


    .filter('tokenizer', function (){
        return function(value,token) {
            if(angular.isString(value)){

                let arrValue;

                //Set default delimiter when delimiter inout is empty
                if(!token){
                    token = ',';
                    arrValue  = value.split('');
                    return arrValue.join(token);
                }

                else{
                    arrValue  = value.split('');
                    return arrValue.join(token);
                }


                // if(!token){
                //     token = ' ';
                //     //return value.replace(/a-z&&[^bc]/g, "/");
                // }


                // let arrValue = value.split('');
                // return arrValue.join(token);


                // else{
                //     let regex = /\s/;
                //     //return value.replace(/a-z&&[^bc]/g, ",");
                // }

            }
        }
    });