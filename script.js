$(function () {
    const List = $(".bi-list");
    const X = $(".bi-x-lg");
    const Nav = $("nav");

    List.on("click", function () { 
        $(this).toggleClass('open'); 
        X.toggleClass('open');
        Nav.toggleClass('open') });

    X.on("click", function () { 
        $(this).toggleClass('open');
        List.toggleClass('open'); 
        Nav.toggleClass('open') });
  });