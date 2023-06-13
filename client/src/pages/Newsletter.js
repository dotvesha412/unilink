export default function Newsletter() {
  return (
    <footer class="bg-danger text-center text-white">

      <div class="container p-4">



        <section class="">
          <form action="">

            <div class="row d-flex justify-content-center">

              <div class="col-auto">
                <p class="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>



              <div class="col-md-5 col-12">

                <div class="form-outline form-white mb-4">
                  <input type="email" id="form5Example2" class="form-control" />
                  <label class="form-label" for="form5Example2">Email address</label>
                </div>
              </div>

              <div class="col-auto">

                <button type="submit" class="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>

            </div>

          </form>
        </section>




      </div>
    </footer>

  )
}