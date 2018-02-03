 $(document).ready(function () {
        $(".my-progress-bar").circularProgress({
            line_width: 6,
            color: "#03beec",
            starting_position: 0,
            percent: 0,
            percentage: true
        }).circularProgress('animate', 80, 1000);
    });