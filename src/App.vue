<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<style lang="sass">

  div.ceras
    background-color: #00ff00
    width: 100px
    height: 150px

  $column-slug: col !default
  $container-size: 576 768 992 1200
  $distance: p m
  $bgColors: ('white': white, 'black': black, 'blue': blue, 'red': red, 'green': green)
  $gap: 1rem
  $common: ','
  $displays: block, table, flex, none
  $grid-breakpoints: (xs: 0, sm: 480px, md: 768px, lg: 1024px);

  @mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints)
    $min: breakpoint-min($name, $breakpoints)
    @if $min
      @media (min-width: $min)
        @content
    @else
      @content

  @function breakpoint-infix($name, $breakpoints: $grid-breakpoints)
    @return if(breakpoint-min($name, $breakpoints) == null, "", "-#{$name}")
  @function breakpoint-min($name, $breakpoints: $grid-breakpoints)
    $min: map-get($breakpoints, $name)
    @return if($min != 0, $min, null)
  

  body
    .container
      width: 100%
      padding-right: 15px
      padding-left: 15px
      margin-right: auto
      margin-left: auto
    .row
      display: flex
      flex-wrap: wrap
      margin-right: -16px
      margin-left: -16px

    *, ::after, ::before
      box-sizing: border-box

    .box-shadow
      box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .05)

    @for $i from 1 through 12
      .#{$column-slug}-#{$i}
        flex: 0 0 ($i / 12 * 100%)
        max-width: ($i / 12 * 100%)
      .flex-#{$i}
        flex: $i

    .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto
      position: relative
      width: 100%
      min-height: 15px
      padding-right: 15px
      padding-left: 15px

    @for $i from 0 through 5
      @each $t in $distance
        .#{$t}t-#{$i}, .#{$t}y-#{$i}
          #{if($t==m, margin, padding)}-top: $i * $gap
        .#{$t}b-#{$i}, .#{$t}y-#{$i}
          #{if($t==m, margin, padding)}-bottom: $i * $gap
        .#{$t}r-#{$i}, .#{$t}x-#{$i}
          #{if($t==m, margin, padding)}-right: $i * $gap
        .#{$t}-#{$i}, .#{$t}x-#{$i}
          #{if($t==m, margin, padding)}-left: $i * $gap

    @each $cs in $container-size
      @media (min-width: #{$cs}px)
        .container
          max-width: #{$cs * 0.9375}px

    @each $k, $v in $bgColors
      .bg-#{$k}
        background-color: $v
    
    @each $dp in $displays
      .d-#{$dp}
        display: #{$dp}
  

  @each $breakpoint in map-keys($grid-breakpoints)
    @include media-breakpoint-up($breakpoint)
      $infix: breakpoint-infix($breakpoint, $grid-breakpoints);
      .flex#{$infix}-row
        flex-direction: row !important
      .flex#{$infix}-column
        flex-direction: column !important
      .flex#{$infix}-row-reverse
        flex-direction: row-reverse !important
      .flex#{$infix}-column-reverse
        flex-direction: column-reverse !important
      .flex#{$infix}-wrap
        flex-wrap: wrap !important
      .flex#{$infix}-nowrap
        flex-wrap: nowrap !important
      .flex#{$infix}-wrap-reverse
        flex-wrap: wrap-reverse !important
      .justify-content#{$infix}-start
        justify-content: flex-start !important
      .justify-content#{$infix}-end
        justify-content: flex-end !important
      .justify-content#{$infix}-center
        justify-content: center !important
      .justify-content#{$infix}-between
        justify-content: space-between !important
      .justify-content#{$infix}-around
        justify-content: space-around !important
      .align-items#{$infix}-start
        align-items: flex-start !important
      .align-items#{$infix}-end
        align-items: flex-end !important
      .align-items#{$infix}-center
        align-items: center !important
      .align-items#{$infix}-baseline
        align-items: baseline !important
      .align-items#{$infix}-stretch
        align-items: stretch !important
      .align-content#{$infix}-start
        align-content: flex-start !important
      .align-content#{$infix}-end
        align-content: flex-end !important
      .align-content#{$infix}-center
        align-content: center !important
      .align-content#{$infix}-between
        align-content: space-between !important
      .align-content#{$infix}-around
        align-content: space-around !important
      .align-content#{$infix}-stretch
        align-content: stretch !important
      .align-self#{$infix}-auto
        align-self: auto !important
      .align-self#{$infix}-start
        align-self: flex-start !important
      .align-self#{$infix}-end
        align-self: flex-end !important
      .align-self#{$infix}-center
        align-self: center !important
      .align-self#{$infix}-baseline
        align-self: baseline !important
      .align-self#{$infix}-stretch
        align-self: stretch !important

</style>