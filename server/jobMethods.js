Meteor.methods({     

    getJobDetails: function(params){

        try {

            if(!Meteor.userId()){return 400;}

            if(!params || !params.jobId){

                return '404'
            }

            return Jobs.findOne({_id: params.jobId});
        }
        catch (e) {

            console.dir(e.stack);
        }
    }, 

   
});