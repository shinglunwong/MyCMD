var getcalories = []; //get calorie record from SQL

var myConfig = {
  type: 'line',
  backgroundColor: '#181818',
  title: {
    text: 'Calorie Record',
    adjustLayout: true,
    fontColor: "#E3E3E5",
    marginTop: 7
  },
  legend: {
    align: 'center',
    verticalAlign: 'top',
    backgroundColor: 'none',
    borderWidth: 0,
    item: {
      fontColor: '#E3E3E5',
      cursor: 'hand'
    },
    marker: {
      type: 'circle',
      borderWidth: 0,
      cursor: 'hand'
    }
  },
  plotarea: {
    margin: 'dynamic 70'
  },
  plot: {
    aspect: 'spline',
    lineWidth: 2,
    marker: {
      borderWidth: 0,
      size: 5
    }
  },
  scaleX: {
    lineColor: '#E3E3E5',
    zooming: true,
    zoomTo: [0, 10],
    // minValue: 1459468800000,
    step: 1,
    maxValue: 30, //week
    item: {
      fontColor: '#E3E3E5'
    },
    //month and day

    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14", "Day 15", "Day 16", "Day 17", "Day 18", "Day 19", "Day 20", "Day 21", "Day 22", "Day 23", "Day 24", "Day 25", "Day 26", "Day 27", "Day 28", "Day 29", "Day 30"]
  },
  scaleY: {
    minorTicks: 1,
    lineColor: '#E3E3E5',
    tick: {
      lineColor: '#E3E3E5'
    },
    minorTick: {
      lineColor: '#E3E3E5'
    },
    minorGuide: {
      visible: true,
      lineWidth: 1,
      lineColor: '#E3E3E5',
      alpha: 0.7,
      lineStyle: 'dashed'
    },
    guide: {
      lineStyle: 'dashed'
    },
    item: {
      fontColor: '#E3E3E5'
    }
  },
  tooltip: {
    borderWidth: 0,
    borderRadius: 3
  },
  preview: {
    adjustLayout: true,
    borderColor: '#E3E3E5',
    mask: {
      backgroundColor: '#E3E3E5'
    }
  },
  crosshairX: {
    plotLabel: {
      multiple: true,
      borderRadius: 3
    },
    scaleLabel: {
      backgroundColor: '#53535e',
      borderRadius: 3
    },
    marker: {
      size: 7,
      alpha: 0.5
    }
  },
  crosshairY: {
    lineColor: '#E3E3E5',
    type: 'multiple',
    scaleLabel: {
      decimals: 2,
      borderRadius: 3,
      offsetX: -5,
      fontColor: "#2C2C39",
      bold: true
    }
  },
  shapes: [{
    type: 'rectangle',
    id: 'view_all',
    height: '20px',
    width: '75px',
    borderColor: '#E3E3E5',
    borderWidth: 1,
    borderRadius: 3,
    x: '85%',
    y: '11%',
    backgroundColor: '#53535e',
    cursor: 'hand',
    label: {
      text: 'View All',
      fontColor: '#E3E3E5',
      fontSize: 12,
      bold: true
    }
  }],

  series: [{
    text: "Get",
    values: getcalories, //get calories record from SQL
    lineColor: '#E34247',
    marker: {
      backgroundColor: '#E34247'
    }
  }, {
    text: "Burn",
    values: [165.57, 170.47, 197.17, 164.64, 132.73, 176.89, 139.41, 158.71, 177.85, 138.87, 135.74, 167.06,
      156.42, 182, 169.73, 151.08, 165.58, 146.29, 124.5, 181.71, 143.96, null, null, null, 146, 172.6,
      149.81, 161.09, 175.88, 149.39, 184.1, 123.85, 186.82, 139.72, 138.61, 170.28, 164.06, 184.33, null,
      null, 131.85, 133.32, 134.49, 143.79, 125.23
    ],
    lineColor: '#FEB32E',
    marker: {
      backgroundColor: '#FEB32E'
    }
  }]
};

// calories.push(63.8, 44.33, 77.56, 95.28, 60.93) //get calories record from SQL

zingchart.render({
  id: 'myChart',
  data: myConfig,
  height: '500',
  width: '725'
});

zingchart.shape_click = function (p) {
  if (p.shapeid == "view_all") {
    zingchart.exec(p.id, 'viewall');
  }
}

$.ajax({
  url: '/burn-chart',
  method: 'get',
}).done(((data) => {
  for (let i = 0; i < data.length; i++) {
    if (!isNaN(data[i].sum)) {
      getcalories.push(Number(data[i].sum));
      console.log(data[i].sum);
    }
  }
  zingchart.render({
    id: 'myChart',
    data: myConfig,
    height: '500',
    width: abc
  });
  var abc = function () {
    var x;
    if (window.matchMedia("(min-width: 900px)").matches) {
      x = '480';
    } else {
      x = '725';
    }
  }
}))
  .fail((err) => {
    console.log(err);
  })

//JQ for handle layout
$(document).ready(function () {
  $('.dash-chart').hide();
  $('.dash-get').show();
  $('.dash-burn').hide();

  $('#to-dash-chart').click(function (e) {
    e.preventDefault();

    $('.dash-chart').show();
    $('.dash-get').hide();
    $('.dash-burn').hide();
  });

  $('#to-dash-get').click(function (e) {
    e.preventDefault();

    $('.dash-chart').hide();
    $('.dash-get').show();
    $('.dash-burn').hide();
  });

  $('#to-dash-burn').click(function (e) {
    e.preventDefault();

    $('.dash-chart').hide();
    $('.dash-get').hide();
    $('.dash-burn').show();
  });
});

window.onload = init;
function init() {
  $(".dash-user-topside").css('height', $(window).height());
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})