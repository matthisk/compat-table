function() {
// Note: only available outside of strict mode.
{ function f() { return 1; } }
  function g() { return 1; }
{ function g() { return 2; } }
{ function h() { return 1; } }
  function h() { return 2; }

return f() === 1 && g() === 2 && h() === 1}

