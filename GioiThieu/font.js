$(window).scroll(function () {
  // Xử lý hiện/ẩn nút "Lên đầu trang"
  if ($(this).scrollTop() != 0) {
    $("#btn-top").fadeIn();
  } else {
    $("#btn-top").fadeOut();
  }

  let scrollPosition = $(window).scrollTop() + $(window).height();
  let documentHeight = $(document).height();

  if (scrollPosition >= documentHeight - 50) {
    $("#btn-end").fadeOut();
  } else {
    $("#btn-end").fadeIn();
  }
});

$("#btn-top").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    500
  );
});

$("#btn-end").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(document).height(),
    },
    500
  );
});
