<template>
  <div>
    <!-- Start of Tuemilio Code -->
    <div id="t-signup"></div>
    <script>
      ;(function(t, u, e, m, i, l, io) {
        t['TuemilioObject'] = m
        t[m] =
          t[m] ||
          function() {
            ;(t[m].q = t[m].q || []).push(arguments)
          }
        t[m].id = '28121d02-fd44-4374-bc1a-97b98f971c21'
        ;(l = u.createElement(e)), (io = u.getElementsByTagName(e)[0])
        l.id = m
        l.src = i
        l.async = 1
        io.parentNode.insertBefore(l, io)
      })(
        window,
        document,
        'script',
        'Tuemilio',
        'https://tuemilio.com/assets/js/modal/3.0/tuemilio-modal.js'
      )
      Tuemilio('init', {
        form: {
          input: { texts: { placeholder: 'name@email.com' } },
          button: {
            texts: {
              CTA: 'Request early access',
              loading: 'Loading',
              checkDashboard: "You're in the waiting list!",
              login: 'Login',
            },
          },
        },
      })
      Tuemilio('sendVisit')
    </script>
    <!-- End of Tuemilio Code -->
  </div>
</template>
<script>
export default {}
</script>
