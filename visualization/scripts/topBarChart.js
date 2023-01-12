import EventEmitter from "./EventEmitter.js";
export default class topBarChart extends EventEmitter{

//Just an empty file for push test
    #selection = []
    
    #svg = []
    #country = null
    #category1 = null
    #category2 = null
    #category3 = null

    //Initial values for the chart
    //Shown every time when completely "zoomed out"
    //Average values of every nutrient over all foods for every country
    #initAxes = [
        {
          country: 'Finland',
          value: 92.16381188118808,
          group: 'Calcium (Ca)'
        },
        { country: 'Sweden', value: 92.9501605709188, group: 'Calcium (Ca)' },
        { country: 'Italy', value: 88.0707039934129, group: 'Calcium (Ca)' },
        {
          country: 'France',
          value: 86.88961869618694,
          group: 'Calcium (Ca)'
        },
        {
          country: 'Germany',
          value: 87.57606283149734,
          group: 'Calcium (Ca)'
        },
        {
          country: 'United Kingdom',
          value: 90.19050204081631,
          group: 'Calcium (Ca)'
        },
        {
          country: 'Netherlands',
          value: 89.2714133114215,
          group: 'Calcium (Ca)'
        }
        ,
        { country: 'Finland', value: 2.183574419663177, group: 'Total iron' },
        { country: 'Sweden', value: 2.1612524886877815, group: 'Total iron' },
        { country: 'Italy', value: 2.1898572025052214, group: 'Total iron' },
        { country: 'France', value: 2.188594022415941, group: 'Total iron' },
        { country: 'Germany', value: 2.138488134206219, group: 'Total iron' },
        {
          country: 'United Kingdom',
          value: 2.1480561564059917,
          group: 'Total iron'
        },
        {
          country: 'Netherlands',
          value: 2.1040874524714814,
          group: 'Total iron'
        }
        ,
        {
          country: 'Finland',
          value: 37.3570104497956,
          group: 'Magnesium (Mg)'
        },
        {
          country: 'Sweden',
          value: 37.21017551755178,
          group: 'Magnesium (Mg)'
        },
        {
          country: 'Italy',
          value: 36.16262483994883,
          group: 'Magnesium (Mg)'
        },
        {
          country: 'France',
          value: 36.56931348221675,
          group: 'Magnesium (Mg)'
        },
        {
          country: 'Germany',
          value: 36.99440490797546,
          group: 'Magnesium (Mg)'
        },
        {
          country: 'United Kingdom',
          value: 36.055962962962965,
          group: 'Magnesium (Mg)'
        },
        {
          country: 'Netherlands',
          value: 35.832345371523495,
          group: 'Magnesium (Mg)'
        }
        ,
        {
          country: 'Finland',
          value: 4.206545209176786,
          group: 'niacin equivalents, total'
        },
        {
          country: 'Sweden',
          value: 4.2180534997770875,
          group: 'niacin equivalents, total'
        },
        {
          country: 'Italy',
          value: 4.314659634888435,
          group: 'niacin equivalents, total'
        },
        {
          country: 'France',
          value: 4.297398373983739,
          group: 'niacin equivalents, total'
        },
        {
          country: 'Germany',
          value: 4.1605233644859725,
          group: 'niacin equivalents, total'
        },
        {
          country: 'United Kingdom',
          value: 4.376135807504078,
          group: 'niacin equivalents, total'
        },
        {
          country: 'Netherlands',
          value: 4.254359624029433,
          group: 'niacin equivalents, total'
        }
        ,
        {
          country: 'Finland',
          value: 166.87864559819425,
          group: 'Phosphorus (P)'
        },
        {
          country: 'Sweden',
          value: 166.71552372426154,
          group: 'Phosphorus (P)'
        },
        {
          country: 'Italy',
          value: 162.4041381878362,
          group: 'Phosphorus (P)'
        },
        {
          country: 'France',
          value: 161.79143574958823,
          group: 'Phosphorus (P)'
        },
        {
          country: 'Germany',
          value: 164.6270325203252,
          group: 'Phosphorus (P)'
        },
        {
          country: 'United Kingdom',
          value: 164.44022140221404,
          group: 'Phosphorus (P)'
        },
        {
          country: 'Netherlands',
          value: 166.241449689441,
          group: 'Phosphorus (P)'
        }
        ,
        {
          country: 'Finland',
          value: 0.2599630394857663,
          group: 'Copper (Cu)'
        },
        {
          country: 'Sweden',
          value: 0.2602993163172283,
          group: 'Copper (Cu)'
        },
        { country: 'Italy', value: 0.2609886114761267, group: 'Copper (Cu)' },
        {
          country: 'France',
          value: 0.2535350758853276,
          group: 'Copper (Cu)'
        },
        {
          country: 'Germany',
          value: 0.2563073443983396,
          group: 'Copper (Cu)'
        },
        {
          country: 'United Kingdom',
          value: 0.2583162116757656,
          group: 'Copper (Cu)'
        },
        {
          country: 'Netherlands',
          value: 0.26361661746098597,
          group: 'Copper (Cu)'
        }
        ,
        {
          country: 'Finland',
          value: 300.6059279525767,
          group: 'Potassium (K)'
        },
        {
          country: 'Sweden',
          value: 296.33887884267665,
          group: 'Potassium (K)'
        },
        {
          country: 'Italy',
          value: 301.02237061769625,
          group: 'Potassium (K)'
        },
        {
          country: 'France',
          value: 301.0676897552883,
          group: 'Potassium (K)'
        },
        {
          country: 'Germany',
          value: 303.5019664072102,
          group: 'Potassium (K)'
        },
        {
          country: 'United Kingdom',
          value: 299.697702092737,
          group: 'Potassium (K)'
        },
        {
          country: 'Netherlands',
          value: 301.8645988420182,
          group: 'Potassium (K)'
        }
        ,
        {
          country: 'Finland',
          value: 0.20425560538116497,
          group: 'riboflavin'
        },
        { country: 'Sweden', value: 0.1983487225459423, group: 'riboflavin' },
        { country: 'Italy', value: 0.20843012098456323, group: 'riboflavin' },
        {
          country: 'France',
          value: 0.21050989690721575,
          group: 'riboflavin'
        },
        {
          country: 'Germany',
          value: 0.19791559784857168,
          group: 'riboflavin'
        },
        {
          country: 'United Kingdom',
          value: 0.2109630872483211,
          group: 'riboflavin'
        },
        {
          country: 'Netherlands',
          value: 0.20762473617560043,
          group: 'riboflavin'
        }
        ,
        {
          country: 'Finland',
          value: 11.131817288801564,
          group: 'Total Selenium'
        },
        {
          country: 'Sweden',
          value: 11.11639492995329,
          group: 'Total Selenium'
        },
        {
          country: 'Italy',
          value: 10.279392834293017,
          group: 'Total Selenium'
        },
        {
          country: 'France',
          value: 9.890143629807692,
          group: 'Total Selenium'
        },
        {
          country: 'Germany',
          value: 11.045665021591597,
          group: 'Total Selenium'
        },
        {
          country: 'United Kingdom',
          value: 11.398034876347484,
          group: 'Total Selenium'
        },
        {
          country: 'Netherlands',
          value: 11.816052427184447,
          group: 'Total Selenium'
        }
        ,
        { country: 'Finland', value: 0.14123763736263711, group: 'thiamin' },
        { country: 'Sweden', value: 0.13948038321167852, group: 'thiamin' },
        { country: 'Italy', value: 0.13605626598465387, group: 'thiamin' },
        { country: 'France', value: 0.13317336683417003, group: 'thiamin' },
        { country: 'Germany', value: 0.12888159534690397, group: 'thiamin' },
        {
          country: 'United Kingdom',
          value: 0.1394534240748607,
          group: 'thiamin'
        },
        {
          country: 'Netherlands',
          value: 0.13332051282051216,
          group: 'thiamin'
        }
        ,
        {
          country: 'Finland',
          value: 0.19796237807710115,
          group: 'vitamin B-6, total'
        },
        {
          country: 'Sweden',
          value: 0.19395720202485003,
          group: 'vitamin B-6, total'
        },
        {
          country: 'Italy',
          value: 0.19979210861264268,
          group: 'vitamin B-6, total'
        },
        {
          country: 'France',
          value: 0.19796707471506927,
          group: 'vitamin B-6, total'
        },
        {
          country: 'Germany',
          value: 0.1838126561198991,
          group: 'vitamin B-6, total'
        },
        {
          country: 'United Kingdom',
          value: 0.1991882402707271,
          group: 'vitamin B-6, total'
        },
        {
          country: 'Netherlands',
          value: 0.19449083936940692,
          group: 'vitamin B-6, total'
        }
        ,
        {
          country: 'Finland',
          value: 1.8658703103288536,
          group: 'vitamin B-12'
        },
        {
          country: 'Sweden',
          value: 1.8263333333333298,
          group: 'vitamin B-12'
        },
        { country: 'Italy', value: 2.0079991158267, group: 'vitamin B-12' },
        {
          country: 'France',
          value: 1.9313106837606833,
          group: 'vitamin B-12'
        },
        {
          country: 'Germany',
          value: 1.8588242320819197,
          group: 'vitamin B-12'
        },
        {
          country: 'United Kingdom',
          value: 1.9983000428632645,
          group: 'vitamin B-12'
        },
        {
          country: 'Netherlands',
          value: 2.003192092823371,
          group: 'vitamin B-12'
        }
        ,
        {
          country: 'Finland',
          value: 0,
          group: 'vitamin E; alpha-tocopherol equiv from E vitamer activities'
        },
        {
          country: 'Sweden',
          value: 0,
          group: 'vitamin E; alpha-tocopherol equiv from E vitamer activities'
        },
        {
          country: 'Italy',
          value: 1.5538741103202847,
          group: 'vitamin E; alpha-tocopherol equiv from E vitamer activities'
        },
        {
          country: 'France',
          value: 1.5244743982494517,
          group: 'vitamin E; alpha-tocopherol equiv from E vitamer activities'
        },
        {
          country: 'Germany',
          value: 1.5004437257438594,
          group: 'vitamin E; alpha-tocopherol equiv from E vitamer activities'
        },
        {
          country: 'United Kingdom',
          value: 1.5848104286345572,
          group: 'vitamin E; alpha-tocopherol equiv from E vitamer activities'
        },
        {
          country: 'Netherlands',
          value: 1.6417909982174679,
          group: 'vitamin E; alpha-tocopherol equiv from E vitamer activities'
        }
        ,
        {
          country: 'Finland',
          value: 1.5845275927687879,
          group: 'Alpha-tocopherol'
        },
        {
          country: 'Sweden',
          value: 1.6141357210179046,
          group: 'Alpha-tocopherol'
        },
        { country: 'Italy', value: 0, group: 'Alpha-tocopherol' },
        { country: 'France', value: 0, group: 'Alpha-tocopherol' },
        { country: 'Germany', value: 0, group: 'Alpha-tocopherol' },
        { country: 'United Kingdom', value: 0, group: 'Alpha-tocopherol' },
        { country: 'Netherlands', value: 0, group: 'Alpha-tocopherol' }
        ,
        {
          country: 'Finland',
          value: 12.924892324682496,
          group: 'vitamin K, total'
        },
        {
          country: 'Sweden',
          value: 12.780976027397262,
          group: 'vitamin K, total'
        },
        {
          country: 'Italy',
          value: 12.191426470588235,
          group: 'vitamin K, total'
        },
        {
          country: 'France',
          value: 12.213107511045655,
          group: 'vitamin K, total'
        },
        {
          country: 'Germany',
          value: 12.19289705882353,
          group: 'vitamin K, total'
        },
        {
          country: 'United Kingdom',
          value: 12.392556650246304,
          group: 'vitamin K, total'
        },
        {
          country: 'Netherlands',
          value: 14.217051993942455,
          group: 'vitamin K, total'
        },
      
        { country: 'Finland', value: 1.4212662993572058, group: 'Zinc (Zn)' },
        { country: 'Sweden', value: 1.4266709265175688, group: 'Zinc (Zn)' },
        { country: 'Italy', value: 1.4232117994100293, group: 'Zinc (Zn)' },
        { country: 'France', value: 1.3934109857978287, group: 'Zinc (Zn)' },
        { country: 'Germany', value: 1.391974548440063, group: 'Zinc (Zn)' },
        {
          country: 'United Kingdom',
          value: 1.441896103896104,
          group: 'Zinc (Zn)'
        },
        {
          country: 'Netherlands',
          value: 1.4053930222782685,
          group: 'Zinc (Zn)'
        }
        ]


        //Dataset for the x-axis
    #nutrients = [{name:"Calcium (Ca)", tag:"(Ca)"},
    {name:"Total iron", tag:"(Fe)" },
    {name:"Magnesium (Mg)", tag:"(Mg)"},
    {name:"niacin equivalents, total", tag:"(niacin)"},
    {name:"Phosphorus (P)", tag:"(P)"},
    {name:"Copper (Cu)", tag:"(Cu)"},
    {name:"Potassium (K)", tag:"(K)"},
    {name:"riboflavin", tag:"(Ca)"},
    {name:"Total Selenium", tag:"(Selenium)"},
    {name:"thiamin", tag:"(thiamin)"},
    {name:"vitamin B-6, total", tag:"(B6)"},
    {name:"vitamin B-12", tag:"(B12)"},
    {name:"vitamin E; alpha-tocopherol equiv from E vitamer activities", tag:"(E)"},
    {name:"Alpha-tocopherol", tag:"(Alpha-tocopherol)"},
    {name:"vitamin K, total", tag:"(K)"},
    {name:"Zinc (Zn)", tag:"(Zn)"}
]



    constructor(axes) {
        
        super()
    

    let countryNames = ["Finland", "Sweden", "Germany", "United Kingdom", "Netherlands", "Italy", "France"]
    

    
        this.init(this.#nutrients, this.#initAxes)

        
    

    }

    //Creates new data for grouped barchart based on the given filters
    createNewData(country, category1, category2, category3){
        if(country == null && category1 == null){
            return this.#initAxes
        }
        //Country
        if(country != null && category1 == null){
            return this.#initAxes.filter(d => d.country == country)
        }
        //Category 1
        if(country == null && category1 != null && category2 == null){
            let data = []
            d3.csv("./dataset.csv", d => {
                
                if(d.level1 == category1){
                    data.push(d)
                }
                //AFTER THIS FILTER THE DATA AND FORM NEW "INITAXES"
            })
        }
        
        //cases

        
        
        //Country, Category1

        //Category 1, Category 2
        //Country, Category 1, Category 2

        //Category 1, Category 2, Category 3
        //Country, Category 1, Category 2, Category 3
    }

    deleteChartContent(){
        let content = d3.selectAll("rect").nodes()
        content.forEach(c => c.remove())

    }



    selectionChange(country, ctg1, ctg2, ctg3, selection){
        if(this.#country != country
            ||     
            this.#category1 != ctg1
            ||
            this.#category2 != ctg2
            ||
            this.#category3 != ctg3    
        ){   
            this.#country = country
            this.#category1 = ctg1
            this.#category2 = ctg2
            this.#category3 = ctg3
            //Create new data
            let newData = this.createNewData(country, ctg1, ctg2, ctg3)
            this.deleteChartContent()
            this.init(this.#nutrients, newData)
        }
    }
      init(nutrients, initAxes){

        //Select the html tag for the bars        
        this.#svg = d3.select("svg.bars")
        let barDiv = this.#svg
        //Chart width and heights
        let bars_width = 800
        let bars_height = 240
        
        //Xscale for the barchart
        let xScale = d3.scaleBand().range ([0, bars_width]).padding(0.4)
        let yScale = d3.scaleLinear().range ([0,bars_height])

        //Second Xscale for groups
        let x1Scale = d3.scaleBand()
        .range([0, xScale.bandwidth()/nutrients.length])
        .padding(0.05)
               

        //Color scale for bars
        let color = d3.scaleOrdinal(d3.schemeCategory10)
        color.domain(initAxes.map(d => d.country))
        //Group object for everything in the chart
        let barsG = barDiv.append("g")
        .attr("transform", "translate(" + 100 + "," + 30 + ")")
        
        xScale.domain(nutrients.map(d => d.tag))
        x1Scale.domain(initAxes.map(d => d.country))
        yScale.domain([d3.max(initAxes.map(d => d.value)),0])

        //Groups to be put into the chart, the bars for the countries are added to each of these groups
        var groups = barDiv.selectAll(null)
        .data(nutrients)
        .enter()
        .append("g")
        .attr("id", d => d.name)
        .attr("transform", function(d) {
            return "translate(" + (xScale(d.tag)+100) + ",30)";
        })
        
        //Add xScale to "g"
        barsG.append("g")
        .attr("transform", "translate(0," + bars_height + ")")
        .call(d3.axisBottom(xScale));

        //Add yScale to "g"
        barsG.append("g")
        .call(d3.axisLeft(yScale).tickFormat(function(d){
            return "$" + d
        }).ticks(10))
        .append("text")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("value")


        //This adds the bars in the axis, this has to be manipulated when the view changes
        groups.selectAll(null)
        .data(function(d) {
            return(initAxes.filter(e => e.group == d.name))
        })
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x1Scale(d.country); })
        .attr("y", function(d) { return yScale(d.value) })
        .attr("width", x1Scale.bandwidth())
        .attr("height", function(d) { return  bars_height - yScale(d.value); })
        .attr("fill", function(d) {
            return color(d.country)
          })
        .on("click", (event) => console.log(event))

        } 
        
    

    
}