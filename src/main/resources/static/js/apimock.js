var apimock = (function () {

    var mockdata = [];

    mockdata["DallasMcgregor"] = [
        {
            author: "DallasMcgregor",
            name: "home",
            points: [
                {
                    x: 15,
                    y: 25
                },
                {
                    x: 20,
                    y: 30
                },
                {
                    x: 55,
                    y: 35
                }
            ]
        },
        {
            author: "DallasMcgregor",
            name: "car",
            points: [
                {
                    x: 40,
                    y: 45
                },
                {
                    x: 50,
                    y: 55
                }
            ]
        }
    ]
    mockdata['Rigo'] = [
	      {
	          author: 'Rigo',
	          name: 'train',
	          points: [
	              {
	                  x: 15,
	                  y: 20
	              },
	              {
	                  x: 40,
	                  y: 45
	              }
	          ]
	      },
		  {
                    author: 'Rigo',
	          name: 'other',
	          points: [
	              {
	                  x: 65,
	                  y: 20
	              },
	              {
	                  x: 47,
	                  y: 35
	              }
	          ]
	      }
	  ]
	
	mockdata['Ramiro'] = [
	      {
	          author: 'Ramiro',
	          name: 'apartament',
	          points: [
	              {
	                  x: 15,
	                  y: 20
	              },
	              {
	                  x: 40,
	                  y: 45
	              },
	              {
	                  x: 50,
	                  y: 30
	              }
	          ]
	      },
		  {
	          author: 'Ramiro',
	          name: 'otherApartament',
	          points: [
	              {
	                  x: 25,
	                  y: 20
	              }
	          ]
	      }
	  ]

    return {
        getBlueprintsByAuthor: function(author, callback) {
            callback(mockdata[author]);
        },

        getBlueprintsByNameAndAuthor: function(name, author, callback) {
            blueprint = mockdata[author].find(function(blueprint) {
                return blueprint.name == name
            });
            callback(blueprint)
        }
    }

})();
