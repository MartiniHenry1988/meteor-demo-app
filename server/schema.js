var Schemas = {};


Schemas.Jobs = new SimpleSchema({ 

  title:              { type: String, label: "Title"},
  description:        { type: String, label: 'Job Description', optional: true}, 
});


//======================================================================================
//=========================== ATTACHING SCHEMA TO COLLECTIONS ==========================
//======================================================================================


Jobs.attachSchema(Schemas.Jobs);