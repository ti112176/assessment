/* global $*/
/* global Chart*/

var app = app || {};
app.ref_values = [70, 76, 68, 65, 71, 82];
app.data = {};
        

app.analyze = function(){
    app.data.values_1 = [];
    app.data.values_2 = [];
    app.data.values_3 = [];
    app.data.values_4 = [];
    app.data.values_5 = [];
    app.data.values_6 = [];
    app.data.points = [];
    app.data.ratios = [];
    /***********/
    this.data.values_1.push($('input[name=val_11]:checked').val());
    this.data.values_1.push($('input[name=val_12]:checked').val());
    this.data.values_1.push($('input[name=val_13]:checked').val());
    this.data.values_1 = this.data.values_1.map(function(c, i, a ){
        return(parseInt(c, 10));
    });
    this.data.points.push(this.analyze_sub(this.data.values_1));
    this.data.ratios.push(this.analyze_sub2(this.data.values_1));
    
    /***********/
    this.data.values_2.push($('input[name=val_21]:checked').val());
    this.data.values_2.push($('input[name=val_22]:checked').val());
    this.data.values_2.push($('input[name=val_23]:checked').val());
    this.data.values_2.push($('input[name=val_24]:checked').val());
    this.data.values_2 = this.data.values_2.map(function(c, i, a ){
        return(parseInt(c, 10));
    });
    this.data.points.push(this.analyze_sub(this.data.values_2));
    this.data.ratios.push(this.analyze_sub2(this.data.values_2));
    
    /***********/
    this.data.values_3.push($('input[name=val_31]:checked').val());
    this.data.values_3.push($('input[name=val_32]:checked').val());
    this.data.values_3.push($('input[name=val_33]:checked').val());
    this.data.values_3.push($('input[name=val_34]:checked').val());
    this.data.values_3 = this.data.values_3.map(function(c, i, a ){
        return(parseInt(c, 10));
    });
    this.data.points.push(this.analyze_sub(this.data.values_3));
    this.data.ratios.push(this.analyze_sub2(this.data.values_3));

    /***********/
    this.data.values_4.push($('input[name=val_41]:checked').val());
    this.data.values_4.push($('input[name=val_42]:checked').val());
    this.data.values_4.push($('input[name=val_43]:checked').val());
    this.data.values_4.push($('input[name=val_44]:checked').val());
    this.data.values_4.push($('input[name=val_45]:checked').val());
    this.data.values_4 = this.data.values_4.map(function(c, i, a ){
        return(parseInt(c, 10));
    });
    this.data.points.push(this.analyze_sub(this.data.values_4));
    this.data.ratios.push(this.analyze_sub2(this.data.values_4));

    /***********/
    this.data.values_5.push($('input[name=val_51]:checked').val());
    this.data.values_5.push($('input[name=val_52]:checked').val());
    this.data.values_5.push($('input[name=val_53]:checked').val());
    this.data.values_5.push($('input[name=val_54]:checked').val());
    this.data.values_5.push($('input[name=val_55]:checked').val());
    this.data.values_5 = this.data.values_5.map(function(c, i, a ){
        return(parseInt(c, 10));
    });
    this.data.points.push(this.analyze_sub(this.data.values_5));
    this.data.ratios.push(this.analyze_sub2(this.data.values_5));

    /***********/
    this.data.values_6.push($('input[name=val_61]:checked').val());
    this.data.values_6.push($('input[name=val_62]:checked').val());
    this.data.values_6.push($('input[name=val_63]:checked').val());
    this.data.values_6.push($('input[name=val_64]:checked').val());
    this.data.values_6.push($('input[name=val_65]:checked').val());
    this.data.values_6 = this.data.values_6.map(function(c, i, a ){
        return(parseInt(c, 10));
    });
    this.data.points.push(this.analyze_sub(this.data.values_6));
    this.data.ratios.push(this.analyze_sub2(this.data.values_6));
    
};

app.analyze_sub = function(ar){
    var total = 0;
    ar.forEach(function(c, i, a){
        total += c;
    });
    return ( total / ( ar.length * 3 ) * 100 );
};

app.analyze_sub2 = function(ar){
    var n = ar.length;
    var r = [0, 0, 0];
    ar.forEach(function(c, i, a){
        switch(c){
            case 3:
                r[0]++;
                break;
            case 2:
                r[1]++;
                break;
            case 1:
                r[2]++;
                break;
        }
    });
    r = r.map(function(c, i, a){
        return (c / n) * 100 ;
    });
    return r;
};

app.drawTable = function(){
    $('#point_1').text(app.data.points[0].toFixed(2));
    $('#point_2').text(app.data.points[1].toFixed(2));
    $('#point_3').text(app.data.points[2].toFixed(2));
    $('#point_4').text(app.data.points[3].toFixed(2));
    $('#point_5').text(app.data.points[4].toFixed(2));
    $('#point_6').text(app.data.points[5].toFixed(2));
    
    $('#ref_1').text(app.ref_values[0].toFixed(2));
    $('#ref_2').text(app.ref_values[1].toFixed(2));
    $('#ref_3').text(app.ref_values[2].toFixed(2));
    $('#ref_4').text(app.ref_values[3].toFixed(2));
    $('#ref_5').text(app.ref_values[4].toFixed(2));
    $('#ref_6').text(app.ref_values[5].toFixed(2));
    
    $('#ratio3_1').text(app.data.ratios[0][0].toFixed(2) + "%");
    $('#ratio3_2').text(app.data.ratios[1][0].toFixed(2) + "%");
    $('#ratio3_3').text(app.data.ratios[2][0].toFixed(2) + "%");
    $('#ratio3_4').text(app.data.ratios[3][0].toFixed(2) + "%");
    $('#ratio3_5').text(app.data.ratios[4][0].toFixed(2) + "%");
    $('#ratio3_6').text(app.data.ratios[5][0].toFixed(2) + "%");

    $('#ratio2_1').text(app.data.ratios[0][1].toFixed(2) + "%");
    $('#ratio2_2').text(app.data.ratios[1][1].toFixed(2) + "%");
    $('#ratio2_3').text(app.data.ratios[2][1].toFixed(2) + "%");
    $('#ratio2_4').text(app.data.ratios[3][1].toFixed(2) + "%");
    $('#ratio2_5').text(app.data.ratios[4][1].toFixed(2) + "%");
    $('#ratio2_6').text(app.data.ratios[5][1].toFixed(2) + "%");

    $('#ratio1_1').text(app.data.ratios[0][2].toFixed(2) + "%");
    $('#ratio1_2').text(app.data.ratios[1][2].toFixed(2) + "%");
    $('#ratio1_3').text(app.data.ratios[2][2].toFixed(2) + "%");
    $('#ratio1_4').text(app.data.ratios[3][2].toFixed(2) + "%");
    $('#ratio1_5').text(app.data.ratios[4][2].toFixed(2) + "%");
    $('#ratio1_6').text(app.data.ratios[5][2].toFixed(2) + "%");
    
};

app.drawCharts = function(){
    Chart.defaults.global.defaultFontSize = 12;
    
    var ctxl = $('#chart_rader');
    ctxl.empty();
    var chartl = new Chart(ctxl,{
        type : 'radar',
        data : {
            labels : [
                "物理コスト",
                "運用コスト",
                "利便性（システム）",
                "利便性（アプリ）",
                "セキュリティ",
                "対障害性"],
            datasets : [
                {
                    label : '一般平均',
                    data : app.ref_values,
                    backgroundColor : 'rgba(127, 255, 255, 0.5)',
                    borderColor : 'rgba(0, 255, 255, 0.5)',
                    pointHoverBackgroundColor : 'rgba(127, 255, 255, 0.5)',
                    pointHoverBorderColor : 'rgba(0, 255, 255, 0.5)'
                },
                {
                    label : '御社',
                    data : app.data.points,
                    backgroundColor : 'rgba(127, 127, 255, 0.5)',
                    borderColor : 'rgba(0, 0, 255, 1)',
                    pointHoverBackgroundColor : 'rgba(127, 127, 255, 0.5)',
                    pointHoverBorderColor : 'rgba(0, 0, 255, 0.5)'
                }
            ]
        },
        options: {
            scale: {
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
    
    var ctxr = $('#chart_bars');
    ctxr.empty();
    var chartr = new Chart(ctxr,{
        type : 'bar',
        data : {
            labels : [
                "物理コスト",
                "運用コスト",
                "利便性（システム）",
                "利便性（アプリ）",
                "セキュリティ",
                "対障害性"],
            datasets : [
                {
                    label : "3ポイント",
                    data : [
                        app.data.ratios[0][0],
                        app.data.ratios[1][0],
                        app.data.ratios[2][0],
                        app.data.ratios[3][0],
                        app.data.ratios[4][0],
                        app.data.ratios[5][0]
                    ],
                    backgroundColor : 'rgba(192, 255, 192, 1)',
                    borderColor : 'rgba(0, 255, 0, 1)'
                },
                {
                    label : "2ポイント",
                    data : [
                        app.data.ratios[0][1],
                        app.data.ratios[1][1],
                        app.data.ratios[2][1],
                        app.data.ratios[3][1],
                        app.data.ratios[4][1],
                        app.data.ratios[5][1]
                    ],
                    backgroundColor : 'rgba(255, 255, 192, 1)',
                    borderColor : 'rgba(255, 255, 0, 1)'
                },
                {
                    label : "1ポイント",
                    data : [
                        app.data.ratios[0][2],
                        app.data.ratios[1][2],
                        app.data.ratios[2][2],
                        app.data.ratios[3][2],
                        app.data.ratios[4][2],
                        app.data.ratios[5][2]
                    ],
                    backgroundColor : 'rgba(255, 192, 192, 1)',
                    borderColor : 'rgba(255, 0, 0, 1)'

                }
            ]
        },
        options : {
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true,
                        min: 0
                    }
                }]
            },
            legend: {
                display: true,
                labels: {
                    fontColor: 'rgb(255, 99, 132)'
                }
            }            
        }
    });
    
    
};

$(function(){
    $('#assessSlide').carousel();

    $('._btn-next').click(function(){
         $('#assessSlide').carousel('next');
    });

    $('._btn-prev').click(function(){
         $('#assessSlide').carousel('prev');
    });

    $('._btn-check').click(function(){
        app.analyze();
        $('#assessSlide').carousel(7);
        app.drawTable();
        app.drawCharts();
    });
});