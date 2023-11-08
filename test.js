"use strict";
(self.webpackChunkqa_web = self.webpackChunkqa_web || []).push([
  [209],
  {
    28209: (ht, re, s) => {
      s.r(re), s.d(re, { LiveEventModule: () => _e });
      var _,
        $ = s(94666),
        le = s(69159),
        ce = s(58446),
        X = s(41204),
        V = s(57822),
        de = s(52044),
        ve = s(44984),
        me = s(57402),
        z = s(60124),
        fe = s(80155),
        C = s(32673),
        P = s(50635),
        Me = s(81083),
        y = s(10745),
        e = s(22560),
        m = s(69263),
        J = s(38699);
      class ee {
        constructor(n, t, r, l) {
          (this.dialog = n), (this.matDialog = t), (this.store = r), (this.translator = l);
        }
        canDeactivate() {
          return this.store.pipe(
            (0, fe.P)(),
            (0, C.w)((n) =>
              !n?.event?.questions || ["CANCELED", "END", "USER_REMOVED"].includes(n.liveEvent.status) || n.event.questions.every((r) => r.isCompleted)
                ? (0, y.of)(!0)
                : this.dialog
                    .confirm({
                      title: this.translator.instant("liveEvents.deactivate.title"),
                      text: this.translator.instant("liveEvents.deactivate.text"),
                      buttons: [
                        { color: "primary", text: this.translator.instant("common.button.abort") },
                        { color: "warn", text: this.translator.instant("common.button.leaving"), value: !0 },
                      ],
                    })
                    .pipe((0, P.U)((r) => (r && this.matDialog.closeAll(), !!r)))
            )
          );
        }
      }
      ((_ = ee).ɵfac = function (n) {
        return new (n || _)(e.LFG(Me.x), e.LFG(ce.on), e.LFG(m.yh), e.LFG(J.sK));
      }),
        (_.ɵprov = e.Yz7({ token: _, factory: _.ɵfac }));
      var qe = s(71670),
        R = s(24851),
        Ie = s(76317),
        w = s(13831),
        u = s(77825),
        f = s(39307),
        j = s(62266);
      const te = (0, m.PH)("[Live Event] Destroy"),
        ne = (0, m.PH)("[Live Event] Init", (0, m.Ky)()),
        pe = (0, m.PH)("[Live Event] Init Session", (0, m.Ky)()),
        ie = ((0, m.PH)("[Live Event] Show Result"), (0, m.PH)("[Live Event] Store Live Event", (0, m.Ky)())),
        Q = (0, m.PH)("[Live Event] Store Session", (0, m.Ky)()),
        oe = (0, m.PH)("[Live Event] Unblock Unload"),
        B = (0, m.PH)("[Live Event] Update Status", (0, m.Ky)());
      var S = s(2508);
      const ge = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
      var ke = s(76421),
        Te = s(63054);
      const Ue = function Le(i, n, t) {
        if (ge.randomUUID && !n && !i) return ge.randomUUID();
        const r = (i = i || {}).random || (i.rng || ke.Z)();
        if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), n)) {
          t = t || 0;
          for (let l = 0; l < 16; ++l) n[t + l] = r[l];
          return n;
        }
        return (0, Te.S)(r);
      };
      var Z,
        M,
        Ae = s(12012),
        Ne = s(90313),
        $e = s(27659);
      function je(i, n) {
        if ((1 & i && (e.ynx(0), e._UZ(1, "img", 14), e.BQk()), 2 & i)) {
          const t = e.oxw(2);
          e.xp6(1), e.Q6J("src", null == t.state || null == t.state.liveEvent ? null : t.state.liveEvent.logo_url, e.LSH);
        }
      }
      function Ze(i, n) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 3)(1, "div", 4),
            e.YNc(2, je, 2, 1, "ng-container", 5),
            e.qZA(),
            e.TgZ(3, "div", 6)(4, "div", 7)(5, "div", 8),
            e._uU(6),
            e.qZA(),
            e.TgZ(7, "div", 9)(8, "mat-form-field", 10)(9, "mat-label"),
            e._uU(10),
            e.ALo(11, "translate"),
            e.qZA(),
            e.TgZ(12, "input", 11),
            e.NdJ("keyup.enter", function () {
              e.CHM(t);
              const l = e.oxw();
              return e.KtG(l.registerUser());
            })("paste", function () {
              e.CHM(t);
              const l = e.oxw();
              return e.KtG(l.onNamePaste());
            }),
            e.qZA()()(),
            e.TgZ(13, "div", 12)(14, "button", 13),
            e.NdJ("click", function () {
              e.CHM(t);
              const l = e.oxw();
              return e.KtG(l.registerUser());
            }),
            e._uU(15),
            e.ALo(16, "translate"),
            e.qZA()()()()();
        }
        if (2 & i) {
          const t = e.oxw(),
            r = e.MAs(3);
          e.xp6(2),
            e.Q6J("ngIf", null == t.state || null == t.state.liveEvent ? null : t.state.liveEvent.logo_url)("ngIfElse", r),
            e.xp6(4),
            e.hij(" ", t.state.liveEvent.name, " "),
            e.xp6(4),
            e.hij(" ", e.lcZ(11, 8, "exam.userNameText"), " "),
            e.xp6(2),
            e.Q6J("formControl", t.userNameControl),
            e.xp6(2),
            e.Q6J("disabled", t.userNameControl.disabled || t.userNameControl.invalid)(
              "ngClass",
              t.userNameControl.disabled || t.userNameControl.invalid ? "disabled-btn" : "register-btn-style"
            ),
            e.xp6(1),
            e.hij(" ", e.lcZ(16, 10, "common.button.continue"), " ");
        }
      }
      function De(i, n) {
        1 & i &&
          (e.TgZ(0, "div", 29)(1, "mat-icon"),
          e._uU(2, "cloud_off"),
          e.qZA(),
          e.TgZ(3, "div", 30)(4, "span", 17),
          e._uU(5),
          e.ALo(6, "translate"),
          e.qZA(),
          e.TgZ(7, "span", 31),
          e._uU(8),
          e.ALo(9, "translate"),
          e.qZA()()()),
          2 & i && (e.xp6(5), e.Oqu(e.lcZ(6, 2, "liveEvents.offlineHint.title")), e.xp6(3), e.Oqu(e.lcZ(9, 4, "liveEvents.offlineHint.text")));
      }
      function Ge(i, n) {
        if ((1 & i && (e.TgZ(0, "div", 30), e._uU(1), e.ALo(2, "truncate"), e.qZA()), 2 & i)) {
          const t = e.oxw(2);
          e.xp6(1), e.hij(" ", e.xi3(2, 1, null == t.play ? null : t.play.title, 50), " ");
        }
      }
      function Fe(i, n) {
        if ((1 & i && (e.ynx(0), e._UZ(1, "img", 14), e.BQk()), 2 & i)) {
          const t = e.oxw(2);
          e.xp6(1), e.Q6J("src", null == t.state || null == t.state.liveEvent ? null : t.state.liveEvent.logo_url, e.LSH);
        }
      }
      function ze(i, n) {
        if ((1 & i && (e.TgZ(0, "div", 32), e._uU(1), e.ALo(2, "number"), e.ALo(3, "number"), e.ALo(4, "number"), e.qZA()), 2 & i)) {
          const t = e.oxw(2);
          e.xp6(1),
            e.AsE(
              " ",
              "QUESTION" == (null == t.state || null == t.state.liveEvent ? null : t.state.liveEvent.status)
                ? e.xi3(2, 2, t.play.progressCurrent + 1, "1.0-0")
                : e.xi3(3, 5, t.play.progressCurrent, "1.0-0"),
              "/",
              e.xi3(4, 8, t.play.progressTotal, "1.0-0"),
              " "
            );
        }
      }
      function Je(i, n) {
        1 & i && (e.TgZ(0, "mat-icon"), e._uU(1, "emoji_events"), e.qZA());
      }
      function Re(i, n) {
        1 & i && (e.TgZ(0, "mat-icon"), e._uU(1, "stairs"), e.qZA());
      }
      function Qe(i, n) {
        if (
          (1 & i && (e.TgZ(0, "div", 33), e.YNc(1, Je, 2, 0, "mat-icon", 1), e.YNc(2, Re, 2, 0, "mat-icon", 1), e.TgZ(3, "span"), e._uU(4), e.qZA()()), 2 & i)
        ) {
          const t = e.oxw(2);
          e.Udp("display", "QUESTION_RESULT" === (null == t.state || null == t.state.liveEvent ? null : t.state.liveEvent.status) ? null : "none"),
            e.ekj("first", 1 === t.currentPosition)("second", 2 === t.currentPosition)("third", 3 === t.currentPosition),
            e.xp6(1),
            e.Q6J("ngIf", t.currentPosition < 4),
            e.xp6(1),
            e.Q6J("ngIf", t.currentPosition >= 4),
            e.xp6(2),
            e.hij("# ", t.currentPosition, "");
        }
      }
      function Be(i, n) {
        1 & i && (e.TgZ(0, "div", 34), e._UZ(1, "qa-play-timer"), e.qZA());
      }
      function We(i, n) {
        if (1 & i) {
          const t = e.EpF();
          e.ynx(0),
            e.YNc(1, De, 10, 6, "div", 15),
            e.TgZ(2, "div", 16)(3, "div", 17),
            e.YNc(4, Ge, 3, 4, "div", 18),
            e.qZA(),
            e.TgZ(5, "div", 19),
            e.YNc(6, Fe, 2, 1, "ng-container", 5),
            e.qZA(),
            e.TgZ(7, "div", 20),
            e.YNc(8, ze, 5, 11, "div", 21),
            e.YNc(9, Qe, 5, 11, "div", 22),
            e.YNc(10, Be, 2, 0, "div", 23),
            e.TgZ(11, "div", 24)(12, "mat-icon", 25),
            e.NdJ("click", function () {
              e.CHM(t);
              const l = e.oxw();
              return e.KtG(l.exit());
            }),
            e._uU(13, "close"),
            e.qZA(),
            e.TgZ(14, "button", 26),
            e.NdJ("click", function () {
              e.CHM(t);
              const l = e.oxw();
              return e.KtG(l.exit());
            }),
            e._uU(15),
            e.ALo(16, "translate"),
            e.qZA()()()(),
            e.TgZ(17, "div", 27),
            e._UZ(18, "mat-progress-bar", 28),
            e.qZA(),
            e._UZ(19, "qa-play-frame"),
            e.BQk();
        }
        if (2 & i) {
          const t = e.oxw(),
            r = e.MAs(3);
          e.xp6(1),
            e.Q6J(
              "ngIf",
              t.connectionDown &&
                (null == t.state || null == t.state.liveEvent ? null : t.state.liveEvent.status) &&
                "WAITING_START" !== (null == t.state || null == t.state.liveEvent ? null : t.state.liveEvent.status)
            ),
            e.xp6(3),
            e.Q6J("ngIf", null == t.play ? null : t.play.title),
            e.xp6(2),
            e.Q6J("ngIf", null == t.state || null == t.state.liveEvent ? null : t.state.liveEvent.logo_url)("ngIfElse", r),
            e.xp6(2),
            e.Q6J("ngIf", 2 !== t.state.play.sectionIndex),
            e.xp6(1),
            e.Q6J("ngIf", t.currentPosition),
            e.xp6(1),
            e.Q6J("ngIf", "END" !== t.state.liveEvent.status && "END" !== t.state.liveEvent.status && "QUESTION_RESULT" !== t.state.liveEvent.status),
            e.xp6(5),
            e.hij(" ", e.lcZ(16, 9, "liveEvents.label.closeLiveEvent"), " "),
            e.xp6(3),
            e.Q6J("value", t.play.progressPercentage);
        }
      }
      function Ye(i, n) {
        1 & i && e._UZ(0, "img", 35);
      }
      class ue {
        constructor(n, t, r, l, h) {
          (this.activatedRoute = n),
            (this.element = t),
            (this.location = r),
            (this.store = l),
            (this.socket = h),
            (this.liveEvent$ = new Ie.X({})),
            (this.userNameControl = new S.p4(null, S.kI.required)),
            (this.navigationBreadcrumb = {
              homeUrl: "/cms/dashboard",
              help: [{ id: "liveEvent" }],
              currentPage: "",
              back: {
                handleBack: () => {
                  this.store.dispatch(w.j.exit());
                },
              },
              breadcrumbs: [{ text: "Live Event", route: "/cms/live-event" }],
              allowFullScreen: !0,
            }),
            this.element.nativeElement.classList.add("qa-live-event"),
            l.subscribe((x) => {
              this.state = x;
            });
        }
        get play() {
          return this.state.play;
        }
        onBack() {
          this.location.back();
        }
        ngOnInit() {
          var n = this;
          return (0, qe.Z)(function* () {
            const t = n.activatedRoute.snapshot.paramMap.get("pin");
            n.store.dispatch(ne({ pin: t }));
          })();
        }
        ngOnDestroy() {
          this.store.dispatch(oe()), this.store.dispatch(te()), this.store.dispatch(u.D.destroy()), this.store.dispatch(f.xv());
        }
        registerUser() {
          if (!this.userNameControl?.value || !this.userNameControl?.value?.trim())
            return this.userNameControl.markAllAsTouched(), void this.userNameControl.setValue("");
          const n = { name: this.userNameControl?.value, uuid: Ue() },
            t = this.activatedRoute.snapshot.paramMap.get("pin");
          if (n.name)
            try {
              sessionStorage.removeItem(`liveEvents.${t}`),
                sessionStorage.setItem(`liveEvents.${t}`, JSON.stringify(n)),
                this.store.dispatch(Q({ session: n }));
            } catch {}
          else this.store.dispatch(f.$F());
        }
        onNamePaste() {
          window.setTimeout(() => {
            this.userNameControl.setValue(this.userNameControl?.value?.replace(/^[\s]*/, ""));
          }, 0);
        }
        get connectionDown() {
          return !!this.socket.isOffline;
        }
        get currentPosition() {
          const n = this.state?.liveEvent?.highscore_list?.findIndex(
            (r) => !!this.state.liveEvent.session && r.user?.uuid === this.state.liveEvent.session.uuid
          );
          let t;
          try {
            t = sessionStorage.getItem(`lq-gamification.${this.state.liveEvent.id}.prevPosition`);
          } catch {}
          return null === n && t ? Number(t) : null !== n && -1 !== n ? n + 1 : null;
        }
        exit() {
          this.store.dispatch(w.j.exit());
        }
      }
      ((Z = ue).ɵfac = function (n) {
        return new (n || Z)(e.Y36(z.gz), e.Y36(e.SBq), e.Y36($.Ye), e.Y36(m.yh), e.Y36(j.$));
      }),
        (Z.ɵcmp = e.Xpm({
          type: Z,
          selectors: [["qa-live-event"]],
          decls: 4,
          vars: 2,
          consts: [
            ["class", "event-wrapper", 4, "ngIf"],
            [4, "ngIf"],
            ["qaWebLogo", ""],
            [1, "event-wrapper"],
            [1, "logo-container"],
            [4, "ngIf", "ngIfElse"],
            [1, "welcome-container"],
            [1, "card"],
            [1, "event-title", "event-name"],
            [1, "registration-form", "event-form"],
            ["appearance", "outline"],
            ["matInput", "", "required", "", "type", "text", 3, "formControl", "keyup.enter", "paste"],
            [1, "registration-start-container", "cover-full"],
            ["mat-raised-button", "", "color", "primary", "type", "button", 1, "registration-btn", "cover-full", 3, "disabled", "ngClass", "click"],
            [1, "logo", 3, "src"],
            ["class", "ioff-indicator", 4, "ngIf"],
            [1, "info-bar"],
            [1, "title"],
            ["class", "text", 4, "ngIf"],
            [1, "quiz-academy-image"],
            [1, "event-details"],
            ["class", "position", 4, "ngIf"],
            ["class", "position-indicator", 3, "display", "first", "second", "third", 4, "ngIf"],
            ["class", "header-timer", 4, "ngIf"],
            [1, "event-exit"],
            [3, "click"],
            ["mat-raised-button", "", "color", "primary", "type", "button", 3, "click"],
            [1, "bar"],
            ["color", "primary", 3, "value"],
            [1, "ioff-indicator"],
            [1, "text"],
            [1, "explanation"],
            [1, "position"],
            [1, "position-indicator"],
            [1, "header-timer"],
            ["src", "../assets/logo.png", 1, "logo"],
          ],
          template: function (n, t) {
            1 & n && (e.YNc(0, Ze, 17, 12, "div", 0), e.YNc(1, We, 20, 11, "ng-container", 1), e.YNc(2, Ye, 1, 0, "ng-template", null, 2, e.W1O)),
              2 & n &&
                (e.Q6J("ngIf", !(null != t.state && null != t.state.liveEvent && t.state.liveEvent.session)),
                e.xp6(1),
                e.Q6J("ngIf", null == t.state || null == t.state.liveEvent ? null : t.state.liveEvent.session));
          },
          dependencies: [$.mk, $.O5, S.Fj, S.JJ, S.Q7, Ae.D, S.oH, le.eB, X.v_, X.$V, V.Hw, de.k0, ve.eI, Ne.Z, $.JJ, $e.W, J.X$],
          styles: [
            ":root{--primary-color: #008d36;--accent-color: #668694;--warn-color: #c03c3c;--correct-color: #94c122}.flex-row{align-content:flex-start;display:flex;flex-direction:row}.flex-align-items-center{align-items:center}.flex-align-items-stretch{align-items:stretch}.flex-justify-content-center{justify-content:center}.flex-justify-content-space-between{justify-content:space-between}.flex-justify-content-end{justify-content:flex-end}.flex-column{display:flex;flex-direction:column}.flex-5{width:5%}.flex-10{width:10%}.flex-15{width:15%}.flex-20{width:20%}.flex-25{width:25%}.flex-33{width:33%}.flex-50{width:50%}.flex-66{width:66%}.flex-grow{display:block;flex-grow:1}.flex-shrink{display:block;flex-shrink:1}.flex-auto-margin>*{margin-right:16px!important}.flex-auto-margin>*:last-child{margin-right:0!important}.flex-align-left-center{align-self:center}.flex-align-right{margin-left:auto!important}.flex-align-left{margin-right:auto!important}.responsive-grid{align-items:center;display:grid;grid-gap:0 16px;grid-template-columns:auto auto auto auto}@media (max-width: 1000px){.responsive-grid{grid-template-columns:auto auto auto}}@media (max-width: 800px){.responsive-grid{grid-template-columns:auto auto}}.grid-2{align-items:center;display:grid;grid-gap:0 16px;grid-template-columns:1fr 1fr}.grid-2 .grid-span-columns{grid-area:auto/span 2}.grid-3{align-items:center;display:grid;grid-gap:0 16px;grid-template-columns:1fr 1fr 1fr}.grid-3 .grid-span-columns{grid-area:auto/span 3}.grid-4{align-items:center;display:grid;grid-gap:0 16px;grid-template-columns:1fr 1fr 1fr 1fr}.grid-4 .grid-span-columns{grid-area:auto/span 4}.qa-live-event .info-bar,.qa-live-event .action-bar{align-items:center;box-sizing:border-box;display:flex}@keyframes slide-in{0%{max-height:0px}to{max-height:350px}}.qa-live-event .event-wrapper{display:flex;align-items:center;justify-content:center;height:100%;flex-direction:column;background-color:#f5f5f5}@media only screen and (max-width: 768px){.qa-live-event .event-wrapper{justify-content:flex-start;padding-top:32px}}.qa-live-event .event-wrapper .logo-container{padding:0;text-align:center}.qa-live-event .event-wrapper .logo-container .logo{width:200px;max-width:50vw}@media only screen and (max-width: 768px){.qa-live-event .event-wrapper .logo-container{width:100%}}.qa-live-event .video-content{box-sizing:border-box;width:100%;border-radius:8px;display:flex;color:#0009}.qa-live-event .video-content mat-icon{color:#0009}.qa-live-event .video-content button{width:100%;text-align:center}.qa-live-event .header-timer{display:none}.qa-live-event .welcome-container{width:90%;max-width:800px;display:flex;flex-direction:column;margin:48px auto auto;margin-bottom:1rem}@media only screen and (max-width: 768px){.qa-live-event .welcome-container .registration-form{flex-direction:column;align-items:stretch}.qa-live-event .welcome-container .registration-form .mat-form-field{margin-bottom:1rem;margin-right:0}}.qa-live-event .welcome-container>.card{width:100%}.qa-live-event .card{background-color:#fff;border:1px solid #e0e0e0;border-radius:8px;box-sizing:border-box;margin-bottom:24px;padding:24px;width:100%}.qa-live-event .event-headline{align-items:center;display:flex}.qa-live-event .event-headline .mat-icon{color:#0009;margin-bottom:-2px;margin-right:8px}.qa-live-event .event-title{color:#0009;font-size:24px;font-weight:700;margin:16px 0 8px}.qa-live-event .event-name{color:#000000de;font-size:25px;font-weight:700}.qa-live-event .event-description-preserve-whitespace{white-space:pre-wrap}.qa-live-event .registration-form{align-items:center;display:flex;margin-top:24px}.qa-live-event .registration-form .mat-form-field{flex-grow:1}.qa-live-event .registration-form .mat-form-field-wrapper{margin-bottom:-1.34375em}.qa-live-event .registration-form .mat-form-field-wrapper .mat-form-field-outline .mat-form-field-outline-start,.qa-live-event .registration-form .mat-form-field-wrapper .mat-form-field-outline .mat-form-field-outline-end,.qa-live-event .registration-form .mat-form-field-wrapper .mat-form-field-outline .mat-form-field-outline-gap{border-width:2px!important}.qa-live-event .registration-form .mat-form-field-wrapper .mat-form-field-outline .mat-form-field-outline-start{border-radius:4px 0 0 4px}.qa-live-event .registration-form .mat-form-field-wrapper .mat-form-field-outline .mat-form-field-outline-end{border-radius:0 4px 4px 0}.qa-live-event .registration-form .mat-fab{margin-left:auto}.qa-live-event .cover-full{width:100%}.qa-live-event .registration-start-container{margin-top:16px}.qa-live-event .registration-start-container .registration-btn{cursor:pointer;height:48px;color:#fff;border-radius:4px}.qa-live-event .start-event-button-container{align-items:center;display:flex;justify-content:flex-end;margin-top:16px}.qa-live-event .start-event-button-container .mat-fab{margin-top:8px}.qa-live-event .start-event-button-container .start-event{height:48px;border-radius:4px;color:#fff}.qa-live-event .register-btn-style{background-color:var(--primary-color)}.qa-live-event .disabled-btn{background-color:#dbdada}.qa-live-event .ioff-indicator{background:var(--primary-color);color:#fff;padding:25px 15px;display:flex;flex-direction:row;align-items:center;justify-content:center;animation:slide-in .8s}.qa-live-event .ioff-indicator mat-icon{width:50px;height:50px;line-height:50px;font-size:30px}.qa-live-event .ioff-indicator .text{display:flex;flex-direction:column}.qa-live-event .ioff-indicator .text .title{font-weight:700;display:block}@media only screen and (max-width: 768px){.qa-live-event .ioff-indicator{position:fixed;top:0;left:0;width:100%;z-index:99}}.qa-live-event .info-bar{box-shadow:0 .5px 3px #00000040,0 .5px 12px #00000013;background-color:#fff;color:#0009;height:80px;font-weight:700;position:relative;z-index:1}.qa-live-event .info-bar .backbutton-mobile{display:none}.qa-live-event .info-bar .title{align-items:center;display:flex;overflow:hidden;flex:1;margin-right:20px}.qa-live-event .info-bar .title .mat-icon,.qa-live-event .info-bar .title .text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:25px;color:#000000de;padding-left:24px}@media only screen and (max-width: 768px){.qa-live-event .info-bar .title .text{padding-left:0;font-size:22px}}.qa-live-event .info-bar .quiz-academy-image{display:flex;width:200px;justify-content:center}.qa-live-event .info-bar .quiz-academy-image .logo{width:auto;height:auto;max-height:60px;max-width:180px}.qa-live-event .info-bar .event-details{display:flex;justify-content:flex-end;align-items:center;padding-right:24px;gap:15px;color:#0009}@media only screen and (min-width: 768px){.qa-live-event .info-bar .event-details{flex:1}}.qa-live-event .info-bar .event-details .position{font-size:20px}.qa-live-event .info-bar .event-details .position-indicator{display:flex;align-items:center;justify-content:center}.qa-live-event .info-bar .event-details .position-indicator.first{color:#e6c81e}.qa-live-event .info-bar .event-details .position-indicator.second{color:#bebebe}.qa-live-event .info-bar .event-details .position-indicator.third{color:#bb8623}.qa-live-event .info-bar .event-details .position-indicator mat-icon{font-family:Material Icons;margin-right:5px}.qa-live-event .info-bar .event-details .event-exit mat-icon{cursor:pointer;display:none}@media only screen and (max-width: 768px){.qa-live-event .info-bar .event-details .event-exit mat-icon{display:block}}.qa-live-event .info-bar .event-details .event-exit button{display:block}@media only screen and (max-width: 768px){.qa-live-event .info-bar .event-details .event-exit button{display:none}}.qa-live-event .info-bar .back{align-items:center;display:none}.qa-live-event .info-bar .progress{align-items:center;display:flex;flex-direction:column}.qa-live-event .info-bar .progress .top{align-items:center;display:flex;justify-content:center;margin-bottom:8px}.qa-live-event .info-bar .progress .position{margin-right:4px}.qa-live-event .info-bar .progress .percentage{margin-left:4px}.qa-live-event .info-bar .progress .mat-progress-bar{background-color:#0000001f;width:256px}.qa-live-event .info-bar .progress .mat-progress-bar .mat-progress-bar-background{display:none}.qa-live-event .info-bar .time{align-items:center;display:flex;justify-content:flex-end}.qa-live-event .info-bar .time .name{background:#9a9a9a;color:#fff;border-radius:.2rem;margin-right:1rem;overflow:hidden;display:flex;flex-direction:row}@media only screen and (max-width: 768px){.qa-live-event .info-bar .time .name{display:none}}.qa-live-event .info-bar .time .name span{padding:.25rem .5rem}.qa-live-event .info-bar .time .name .prefix{background:#7a7a7a;font-weight:700}.qa-live-event .info-bar .bar{height:8px}.qa-live-event .info-bar .bar mat-progress-bar{height:8px}@media only screen and (max-width: 768px){.qa-live-event{width:100vw;overflow:hidden}.qa-live-event .qa-play-frame{height:100%!important;max-height:100%;overflow-y:auto}.qa-live-event .nav-breadcrumb{display:none}.qa-live-event .info-bar{padding:16px;background-color:#fff;width:100vw;grid-row:1;grid-column:1;justify-content:space-between}.qa-live-event .info-bar .backbutton-mobile{display:block;position:absolute;left:3vmin}.qa-live-event .info-bar .backbutton-mobile button{padding:0 2vmin;min-width:0}.qa-live-event .info-bar .quiz-academy-image{display:none}.qa-live-event .info-bar .back{display:flex}.qa-live-event .info-bar .back .mat-icon{color:var(--primary-color);font-size:30px;height:30px;width:30px}.qa-live-event .info-bar .event-details{padding-right:0;width:auto}.qa-live-event .info-bar .event-details .position{font-size:18px}.qa-live-event .info-bar .event-details .header-timer{display:block}.qa-live-event .info-bar .progress{height:100%;flex-basis:100%;flex:10 0 0}.qa-live-event .info-bar .progress .mat-progress-bar{width:100vw;position:absolute;bottom:0;left:0}.qa-live-event .info-bar .progress .top{margin-top:auto}.qa-live-event .info-bar .time{position:absolute;right:3vmin}}\n",
          ],
          encapsulation: 2,
          data: { animation: [(0, R.X$)("fadeOut", [(0, R.eR)(":leave", [(0, R.jt)("400ms ease-out", (0, R.oB)({ opacity: 0 }))])])] },
        }));
      const He = [{ path: ":pin", component: ue, canDeactivate: [ee] }];
      class he {}
      ((M = he).ɵfac = function (n) {
        return new (n || M)();
      }),
        (M.ɵmod = e.oAB({ type: M })),
        (M.ɵinj = e.cJS({ imports: [z.Bz.forChild(He), z.Bz] }));
      var Ke = s(58987),
        c = s(43599),
        xe = s(25474),
        Xe = s(90833),
        Ve = s(54987);
      const { isArray: et } = Array;
      var nt = s(20591),
        it = s(93945),
        ot = s(10420);
      var D,
        W = s(60116),
        ye = s(53158),
        q = s(19337),
        Y = s(73),
        st = s(40317),
        H = s(47125),
        rt = s(83447),
        I = s(16901),
        lt = s(97155),
        ct = s(24766),
        we = s(17520);
      const be = new e.OlP("PortalData");
      class Ce {
        constructor(n) {
          this.data = n;
        }
      }
      ((D = Ce).ɵfac = function (n) {
        return new (n || D)(e.Y36(be, 8));
      }),
        (D.ɵcmp = e.Xpm({
          type: D,
          selectors: [["qa-score-info"]],
          decls: 12,
          vars: 4,
          consts: [
            [1, "scoreind"],
            [1, "scoreind-content"],
            [1, "ind-icon"],
            [1, "arrow"],
            [1, "trophy"],
            [1, "place-swap"],
            [1, "place", "old"],
            [1, "place", "new"],
          ],
          template: function (n, t) {
            1 & n &&
              (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon", 3),
              e._uU(4, "arrow_right_alt"),
              e.qZA(),
              e.TgZ(5, "mat-icon", 4),
              e._uU(6, "emoji_events"),
              e.qZA()(),
              e.TgZ(7, "div", 5)(8, "span", 6),
              e._uU(9),
              e.qZA(),
              e.TgZ(10, "span", 7),
              e._uU(11),
              e.qZA()()()()),
              2 & n &&
                (e.ekj("down", t.data.oldPlace > 0 && t.data.oldPlace < t.data.newPlace),
                e.xp6(9),
                e.Oqu(0 === t.data.oldPlace ? "" : "# " + t.data.oldPlace),
                e.xp6(2),
                e.hij("# ", t.data.newPlace, ""));
          },
          dependencies: [V.Hw],
          styles: [
            "[_ngcontent-%COMP%]:root{--primary-color: #008d36;--accent-color: #668694;--warn-color: #c03c3c;--correct-color: #94c122}.flex-row[_ngcontent-%COMP%]{align-content:flex-start;display:flex;flex-direction:row}.flex-align-items-center[_ngcontent-%COMP%]{align-items:center}.flex-align-items-stretch[_ngcontent-%COMP%]{align-items:stretch}.flex-justify-content-center[_ngcontent-%COMP%]{justify-content:center}.flex-justify-content-space-between[_ngcontent-%COMP%]{justify-content:space-between}.flex-justify-content-end[_ngcontent-%COMP%]{justify-content:flex-end}.flex-column[_ngcontent-%COMP%]{display:flex;flex-direction:column}.flex-5[_ngcontent-%COMP%]{width:5%}.flex-10[_ngcontent-%COMP%]{width:10%}.flex-15[_ngcontent-%COMP%]{width:15%}.flex-20[_ngcontent-%COMP%]{width:20%}.flex-25[_ngcontent-%COMP%]{width:25%}.flex-33[_ngcontent-%COMP%]{width:33%}.flex-50[_ngcontent-%COMP%]{width:50%}.flex-66[_ngcontent-%COMP%]{width:66%}.flex-grow[_ngcontent-%COMP%]{display:block;flex-grow:1}.flex-shrink[_ngcontent-%COMP%]{display:block;flex-shrink:1}.flex-auto-margin[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-right:16px!important}.flex-auto-margin[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{margin-right:0!important}.flex-align-left-center[_ngcontent-%COMP%]{align-self:center}.flex-align-right[_ngcontent-%COMP%]{margin-left:auto!important}.flex-align-left[_ngcontent-%COMP%]{margin-right:auto!important}.responsive-grid[_ngcontent-%COMP%]{align-items:center;display:grid;grid-gap:0 16px;grid-template-columns:auto auto auto auto}@media (max-width: 1000px){.responsive-grid[_ngcontent-%COMP%]{grid-template-columns:auto auto auto}}@media (max-width: 800px){.responsive-grid[_ngcontent-%COMP%]{grid-template-columns:auto auto}}.grid-2[_ngcontent-%COMP%]{align-items:center;display:grid;grid-gap:0 16px;grid-template-columns:1fr 1fr}.grid-2[_ngcontent-%COMP%]   .grid-span-columns[_ngcontent-%COMP%]{grid-area:auto/span 2}.grid-3[_ngcontent-%COMP%]{align-items:center;display:grid;grid-gap:0 16px;grid-template-columns:1fr 1fr 1fr}.grid-3[_ngcontent-%COMP%]   .grid-span-columns[_ngcontent-%COMP%]{grid-area:auto/span 3}.grid-4[_ngcontent-%COMP%]{align-items:center;display:grid;grid-gap:0 16px;grid-template-columns:1fr 1fr 1fr 1fr}.grid-4[_ngcontent-%COMP%]   .grid-span-columns[_ngcontent-%COMP%]{grid-area:auto/span 4}@keyframes _ngcontent-%COMP%_fade-in{0%{background:rgba(0,0,0,0)}to{background:rgba(0,0,0,.3)}}@keyframes _ngcontent-%COMP%_fade-out{0%{background:rgba(0,0,0,.3)}to{background:rgba(0,0,0,0)}}[_nghost-%COMP%]{background:rgba(0,0,0,.3);width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none;pointer-events:none;animation:_ngcontent-%COMP%_fade-in .5s,fade-out .5s;animation-fill-mode:forwards;animation-delay:0s,4s}@keyframes _ngcontent-%COMP%_scalein{0%{transform:scale(0)}90%{transform:scale(1.1)}to{transform:scale(1)}}@keyframes _ngcontent-%COMP%_scaleout{0%{transform:scale(1)}10%{transform:scale(1.1)}to{transform:scale(0)}}[_nghost-%COMP%]   .scoreind[_ngcontent-%COMP%]{background:var(--primary-color);display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;width:450px;height:450px;max-width:80vmin;max-height:80vmin;border-radius:50%;animation:_ngcontent-%COMP%_scalein .5s,scaleout .5s;animation-delay:0s,4s;transform:scale(1);animation-fill-mode:forwards}[_nghost-%COMP%]   .scoreind.down[_ngcontent-%COMP%]{background:#ee0011}@keyframes _ngcontent-%COMP%_slide-down{0%{transform:translate(-30%,-100%) rotate(90deg);opacity:0}to{transform:translate(-30%) rotate(90deg);opacity:1}}[_nghost-%COMP%]   .scoreind.down[_ngcontent-%COMP%]   .ind-icon[_ngcontent-%COMP%]   mat-icon.arrow[_ngcontent-%COMP%]{transform:translate(-30%,-100%) rotate(90deg);animation-name:_ngcontent-%COMP%_slide-down}[_nghost-%COMP%]   .scoreind[_ngcontent-%COMP%]   .scoreind-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;transform:scale(0);animation:_ngcontent-%COMP%_scalein .5s;animation-fill-mode:forwards;animation-delay:.6s}[_nghost-%COMP%]   .scoreind[_ngcontent-%COMP%]   .ind-icon[_ngcontent-%COMP%]{display:grid;grid-template-rows:100%;grid-template-columns:100%}[_nghost-%COMP%]   .scoreind[_ngcontent-%COMP%]   .ind-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{grid-row:1;grid-column:1;font-family:Material Icons;font-size:8rem;width:8rem;height:8rem;line-height:8rem;animation-delay:2s;animation-fill-mode:forwards;animation-duration:.5s}@keyframes _ngcontent-%COMP%_slide-top{0%{transform:translate(-30%,100%) rotate(-90deg);opacity:0}to{transform:translate(-30%) rotate(-90deg);opacity:1}}[_nghost-%COMP%]   .scoreind[_ngcontent-%COMP%]   .ind-icon[_ngcontent-%COMP%]   mat-icon.arrow[_ngcontent-%COMP%]{transform:translate(-30%,100%) rotate(-90deg);opacity:0;animation-name:_ngcontent-%COMP%_slide-top}@keyframes _ngcontent-%COMP%_slide-right{0%{transform:translate(0)}to{transform:translate(30%)}}[_nghost-%COMP%]   .scoreind[_ngcontent-%COMP%]   .ind-icon[_ngcontent-%COMP%]   mat-icon.trophy[_ngcontent-%COMP%]{transform:translate(0);animation-name:_ngcontent-%COMP%_slide-right}@keyframes _ngcontent-%COMP%_floatup{0%{transform:translateY(0);opacity:1}to{transform:translateY(-100%);opacity:0}}@keyframes _ngcontent-%COMP%_floatin{0%{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}[_nghost-%COMP%]   .scoreind[_ngcontent-%COMP%]   .place-swap[_ngcontent-%COMP%]{font-size:3rem;font-weight:700;display:grid;grid-template-columns:100%;grid-template-rows:100%}[_nghost-%COMP%]   .scoreind[_ngcontent-%COMP%]   .place-swap[_ngcontent-%COMP%]   .place[_ngcontent-%COMP%]{grid-row:1;grid-column:1;animation-fill-mode:forwards;animation-delay:2s;animation-duration:1s}[_nghost-%COMP%]   .scoreind[_ngcontent-%COMP%]   .place-swap[_ngcontent-%COMP%]   .place.old[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_floatup}[_nghost-%COMP%]   .scoreind[_ngcontent-%COMP%]   .place-swap[_ngcontent-%COMP%]   .place.new[_ngcontent-%COMP%]{opacity:0;transform:translateY(100%);animation-name:_ngcontent-%COMP%_floatin}",
          ],
        }));
      var k,
        T,
        dt = s(25895);
      class ae {
        constructor(n, t) {
          (this.overlay = n), (this.injector = t), (this.alreadyOpen = !1);
        }
        open(n, t) {
          if (this.alreadyOpen) return;
          this.alreadyOpen = !0;
          const r = this.overlay.create(),
            h = new WeakMap([[be, { oldPlace: n, newPlace: t }]]),
            x = new we.nK(this.injector, h),
            O = new we.C5(Ce, null, x);
          r.attach(O),
            window.setTimeout(() => {
              r.dispose(), (this.alreadyOpen = !1);
            }, 5e3);
        }
      }
      ((k = ae).ɵfac = function (n) {
        return new (n || k)(e.LFG(dt.aV), e.LFG(e.zs3));
      }),
        (k.ɵprov = e.Yz7({ token: k, factory: k.ɵfac }));
      class Ee extends rt.x {
        constructor(n, t, r, l, h, x, O, N) {
          super(l, h, te, ne),
            (this.api = n),
            (this.matSnackBar = t),
            (this.router = r),
            (this.translator = x),
            (this.socket = O),
            (this.scoreOverlay = N),
            (this.getLiveEvent$ = (0, c.GW)(() =>
              this.actions$.pipe(
                (0, c.l4)(ne),
                (0, C.w)(({ pin: a }) =>
                  this.api.getPublicLiveEventByPin({ pin: a }).pipe(
                    (0, W.h)((o) => {
                      if ("PRE_START" === o.status || "END" === o.status) {
                        this.router.navigateByUrl("/"),
                          this.matSnackBar.open(
                            this.translator.instant("liveEvents.message.quizWithPin") + ` "${a}" ` + this.translator.instant("liveEvents.message.quizNotExist")
                          );
                        try {
                          let d = sessionStorage.length;
                          for (; d--; ) {
                            const v = sessionStorage.key(d);
                            /liveEvents\.(.*)/g.test(v) && sessionStorage.removeItem(v);
                          }
                        } catch {}
                        return !1;
                      }
                      return !0;
                    }),
                    (0, ye.K)(
                      (o) => (
                        o instanceof Ke.UA &&
                          404 === o.status &&
                          (this.router.navigateByUrl("/"),
                          this.matSnackBar.open(
                            this.translator.instant("liveEvents.message.quizWithPin") + ` "${a}" ` + this.translator.instant("liveEvents.message.quizNotExist")
                          )),
                        (0, xe._)(o)
                      )
                    )
                  )
                ),
                (0, q.b)((a) => this.store.dispatch(pe({ pin: a?.pin_code }))),
                (0, C.w)((a) => {
                  const o = [ie({ liveEvent: a }), u.D.init({ isAnswerRetractionDisabled: !0, questions: a?.questions ?? null, eventId: a.id })];
                  try {
                    a &&
                      sessionStorage.getItem(`liveEvents.${a.id}`) &&
                      JSON.parse(sessionStorage.getItem(`liveEvents.${a.id}`)).questions.map((v) => {
                        v.isAnswered &&
                          (o.push(u.D.updateAnswerSelection({ questionId: v.model.id, selection: v.selection })),
                          o.push(u.D.storeAnswer({ isAnsweredCorrectly: v.isAnsweredCorrectly, questionId: v.model.id, dontCallApi: !0 })));
                      });
                  } catch {}
                  return o;
                })
              )
            )),
            (this.initSession$ = (0, c.GW)(() =>
              this.actions$.pipe(
                (0, c.l4)(pe),
                (0, C.w)(({ pin: a }) => {
                  let o;
                  try {
                    o = JSON.parse(sessionStorage.getItem(`liveEvents.${a}`));
                  } catch {}
                  return (0, y.of)(o && o.name && o.uuid ? o : null);
                }),
                (0, P.U)((a) => (a?.name ? Q({ session: a }) : f.$F()))
              )
            )),
            (this.onEventzInitBlockUnload$ = (0, c.GW)(
              () =>
                this.actions$.pipe(
                  (0, c.l4)(u.D.init),
                  (0, q.b)(() => {
                    window.addEventListener("beforeunload", this.onBeforeunload);
                  })
                ),
              { dispatch: !1 }
            )),
            (this.initPlayOnEventInit$ = (0, c.GW)(() =>
              this.actions$.pipe(
                (0, c.l4)(u.D.init),
                this.mapState(),
                (0, P.U)(({ state: a }) =>
                  w.j.init({
                    actions: [],
                    exitText: "",
                    progressCurrent: 0,
                    progressPercentage: 0,
                    progressTotal: a.event && a.event.questions ? a.event.questions.length : 0,
                    sections: [
                      { name: "waiting", views: [{ component: "liveEventWaiting", navigationDisabledIf: () => !0 }] },
                      {
                        name: "questions",
                        views:
                          a.event && a.event.questions
                            ? a.event.questions.map((o) => ({
                                component: "eventQuestion",
                                componentData: { questionId: o.model.id, hideWeblink: !0, disableSubmit: () => this.socket.isOffline },
                                navigationDisabledIf: (d) => !d.event.questions.every((v) => v.isCompleted),
                              }))
                            : [],
                      },
                      {
                        name: "summary",
                        views: [
                          {
                            component: "eventSummary",
                            actions: [
                              {
                                handler: () => {
                                  this.store.dispatch(w.j.exit());
                                },
                                hideIf: (o) => 2 !== o.play.sectionIndex,
                                icon: null,
                                raised: !0,
                                class: "close-button",
                                text: this.translator.instant("liveEvents.label.closeLiveEvent"),
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    title: a?.liveEvent ? a?.liveEvent?.name : "",
                    titleIcon: "live_tv",
                  })
                )
              )
            )),
            (this.onCompleteQuestionSetProgress$ = (0, c.GW)(() =>
              this.actions$.pipe(
                (0, c.l4)(u.D.completeQuestion),
                this.mapState(),
                (0, P.U)(({ state: a }) => {
                  const o = a.event.questions ? a.event.questions.filter((v) => v.isCompleted).length : 0;
                  this.showScoreOverlay(a, o);
                  const d = a.event.questions.length;
                  return w.j.setProgress({ current: o, percentage: (o / d) * 100, total: d });
                })
              )
            )),
            (this.onExit$ = (0, c.GW)(
              () =>
                this.actions$.pipe(
                  (0, c.l4)(w.j.exit),
                  (0, q.b)(() => {
                    this.router.navigateByUrl("/").then((a) => {
                      a && this.clearSessionStorage();
                    });
                  })
                ),
              { dispatch: !1 }
            )),
            (this.onReceive$ = (0, c.GW)(() =>
              this.actions$.pipe(
                (0, c.l4)(f.pT),
                this.mapState(),
                (0, P.U)(({ message: a }) => {
                  let o = a?.high_score_list;
                  o &&
                    (o = o.slice().sort((b, G) => {
                      let F = G.score - b.score;
                      return 0 === F && (F = b.time - G.time), 0 === F && (F = b.user.uuid > G.user.uuid ? -1 : 1), F;
                    }));
                  const d = a;
                  let v;
                  d &&
                    d.server_time &&
                    d.server_time.includes("T") &&
                    d.server_time.includes("Z") &&
                    (v = `${d.server_time.split("T")[0]} ${d.server_time.split("T")[1].split(".")[0]}`);
                  const p = I(v || d.server_time),
                    g = I(d.active_question_start);
                  let E = !0;
                  return (
                    p.diff(g, "seconds") && (E = !1),
                    B({
                      answerTimeSeconds:
                        p.diff(g, "seconds") && p.diff(g, "seconds") < d.answer_time_sec
                          ? d.answer_time_sec - p.diff(g, "seconds") + 3
                          : p.diff(g, "seconds") >= d.answer_time_sec
                          ? p.diff(g, "seconds") === d.answer_time_sec
                            ? 2
                            : 0
                          : d.answer_time_sec,
                      currentQuestionId: d.active_question_id,
                      status: d.status,
                      highscore_list: o,
                      useCountDown: E,
                    })
                  );
                })
              )
            )),
            (this.onSocketReceiveEndUnblockUnload$ = (0, c.GW)(() =>
              this.actions$.pipe(
                (0, c.l4)(f.pT),
                (0, W.h)(({ message: a }) => "END" === a.status),
                (0, Y.h)(oe())
              )
            )),
            (this.onUnblockUnload$ = (0, c.GW)(
              () =>
                this.actions$.pipe(
                  (0, c.l4)(oe),
                  (0, q.b)(() => {
                    window.removeEventListener("beforeunload", this.onBeforeunload);
                  })
                ),
              { dispatch: !1 }
            )),
            (this.onUpdateStatusCompletePriorQuestions$ = (0, c.GW)(() =>
              this.actions$.pipe(
                (0, c.l4)(B),
                (0, W.h)(({ currentQuestionId: a }) => void 0 !== a),
                this.mapState(),
                (0, C.w)(({ currentQuestionId: a, state: o }) => {
                  let v = o.event && o.event.questions ? o.event.questions.findIndex((p) => p.model.id === a) : null;
                  return (
                    ["END", "QUESTION_RESULT"].includes(o.liveEvent.status) && (v += 1),
                    o.event && o.event.questions
                      ? o.event.questions
                          .slice(0, v)
                          .filter((p) => !p.isCompleted)
                          .map((p) => u.D.completeQuestion({ questionId: p.model.id }))
                      : []
                  );
                })
              )
            )),
            (this.registerSocket$ = (0, c.GW)(() =>
              (function at(...i) {
                const n = (0, ot.jO)(i),
                  t = (function tt(i) {
                    return 1 === i.length && et(i[0]) ? i[0] : i;
                  })(i);
                return t.length
                  ? new Xe.y((r) => {
                      let l = t.map(() => []),
                        h = t.map(() => !1);
                      r.add(() => {
                        l = h = null;
                      });
                      for (let x = 0; !r.closed && x < t.length; x++)
                        (0, Ve.Xf)(t[x]).subscribe(
                          (0, it.x)(
                            r,
                            (O) => {
                              if ((l[x].push(O), l.every((N) => N.length))) {
                                const N = l.map((a) => a.shift());
                                r.next(n ? n(...N) : N), l.some((a, o) => !a.length && h[o]) && r.complete();
                              }
                            },
                            () => {
                              (h[x] = !0), !l[x].length && r.complete();
                            }
                          )
                        );
                      return () => {
                        l = h = null;
                      };
                    })
                  : nt.E;
              })(this.actions$.pipe((0, c.l4)(ie)), this.actions$.pipe((0, c.l4)(Q))).pipe(
                (0, C.w)(([{ liveEvent: a }, { session: o }]) => {
                  const d = { action: "register", data: { live_event_id: a.id, uuid: o.uuid, username: o.name } };
                  return [f.$j({ url: ct.N.websocketEventUrl }), f.lW({ message: d })];
                })
              )
            )),
            (this.sendResult$ = (0, c.GW)(
              () =>
                this.actions$.pipe(
                  (0, c.l4)(u.D.storeAnswer),
                  this.mapStateAndQuestionForEvent(),
                  (0, C.w)(({ isAnsweredCorrectly: a, question: o, dontCallApi: d, state: v }) => {
                    let p;
                    o &&
                      o.model &&
                      (o.model.type === H.ce.SingleChoice
                        ? (p = [{ id: o.selection }])
                        : o.model.type === H.ce.MultipleChoice && (p = Object.values(o.selection).map((E) => ({ id: +E }))));
                    const g = {
                      answers: p,
                      created_by: v.liveEvent && v.liveEvent.session ? v.liveEvent.session.uuid : "",
                      event_id: v.liveEvent.id,
                      question_id: o ? o.model.id : null,
                      result: a ? 1 : 0,
                    };
                    o?.model?.type === H.ce.FreeText && o.model.is_poll_question && (g.free_text_answer = o.selection),
                      o && o.endTime && (g.time = I(o.endTime).diff(I(o.startTime), "milliseconds"));
                    try {
                      sessionStorage.setItem(`liveEvents.${v.liveEvent.id}`, JSON.stringify(v.event));
                    } catch {}
                    return !d && g.created_by && (g.answers?.length || g.free_text_answer || (o && o.model && o.model.type === H.ce.TrueFalse))
                      ? this.api.createPublicLiveEventResult({ id: v.liveEvent.id, body: g }).pipe(
                          (0, ye.K)((E) => {
                            const b = Object.assign({}, g);
                            return (
                              this.matSnackBar.open(this.translator.instant("liveEvents.effects.submitAnswerError")),
                              E && (b.error = JSON.stringify(E)),
                              lt.Tb(new Error("Error occured while submitting Answer in live event : " + b.event_id), { extra: b, fingerprint: [b.event_id] }),
                              (0, xe._)(E)
                            );
                          })
                        )
                      : (0, y.of)({});
                  })
                ),
              { dispatch: !1 }
            )),
            (this.startTimerAfterCountdown$ = (0, c.GW)(() =>
              this.actions$.pipe(
                (0, c.l4)(u.D.stopCountdown),
                this.mapState(),
                (0, P.U)(({ state: a }) => w.j.startTimer({ from: I().toISOString(), to: I().add(a.liveEvent.answerTimeSeconds, "s").toISOString() }))
              )
            )),
            (this.updateStatus$ = (0, c.GW)(() => {
              let a, o;
              return this.actions$.pipe(
                (0, c.l4)(B),
                this.mapState(),
                (0, C.w)(({ currentQuestionId: d, state: v, status: p, useCountDown: g }) => {
                  const E = v.event?.questions?.find((b) => b.model.id === d)?.model?.is_poll_question ?? !1;
                  switch (p) {
                    case "CANCELED":
                      return this.matSnackBar.open(this.translator.instant("liveEvents.effects.canceled")), (0, y.of)(w.j.exit());
                    case "END":
                      return this.clearSessionStorage(), (0, y.of)(w.j.navigate({ sectionIndex: 2, viewIndex: 0 }));
                    case "QUESTION":
                      return E
                        ? [u.D.showQuestion({ questionId: d, useCountdown: !1 })]
                        : g
                        ? [u.D.showQuestion({ questionId: d, useCountdown: g })]
                        : [u.D.showQuestion({ questionId: d, useCountdown: g }), u.D.stopCountdown({ questionId: d })];
                    case "QUESTION_END":
                      return (
                        (a = [w.j.cancelTimer()]),
                        (o = v.play.sections[v.play.sectionIndex]),
                        (1 !== v.play.sectionIndex || (o.views[o.viewIndex] && o.views[o.viewIndex].componentData.questionId !== d)) &&
                          a.push(u.D.showQuestion({ questionId: d })),
                        a
                      );
                    case "QUESTION_RESULT":
                      return (
                        (a = [u.D.completeQuestion({ questionId: d }), w.j.cancelTimer()]),
                        (o =
                          v.play && v.play.sections && v.play.sectionIndex && v.play.sections[v.play.sectionIndex]
                            ? v.play.sections[v.play.sectionIndex]
                            : null),
                        (1 !== v.play.sectionIndex || (o && o.views[o.viewIndex] && o.views[o.viewIndex].componentData.questionId !== d)) &&
                          a.push(u.D.showQuestion({ questionId: d })),
                        a
                      );
                    case "USER_REMOVED":
                      return this.matSnackBar.open(this.translator.instant("liveEvents.effects.removedFromQuiz")), (0, y.of)(w.j.exit());
                    default:
                      return (0, y.of)(null);
                  }
                }),
                (0, W.h)((d) => !!d)
              );
            })),
            (this.onBeforeunload = (a) => {
              a.preventDefault(), (a.returnValue = "");
            });
        }
        getCurrentPosition(n) {
          const t = n.liveEvent?.highscore_list?.findIndex((r) => r.user?.uuid === n.liveEvent.session.uuid);
          return null !== t && -1 !== t ? t + 1 : null;
        }
        showScoreOverlay(n, t) {
          const r = t ? n.event.questions[t - 1].model : null;
          if (r && r.is_poll_question) return;
          const l = this.getCurrentPosition(n);
          try {
            const h = Number(sessionStorage.getItem(`lq-gamification.${n.liveEvent.id}.prevPosition`)) || 0;
            if (
              !l ||
              isNaN(l) ||
              (sessionStorage.setItem(`lq-gamification.${n.liveEvent.id}.prevPosition`, l.toString()),
              sessionStorage.setItem(`lq-gamification.${n.liveEvent.id}.lastTime`, n.liveEvent.highscore_list[l - 1].time.toString()),
              l > 3 || l === h)
            )
              return;
            this.scoreOverlay.open(h, l);
          } catch {}
        }
        clearSessionStorage() {
          try {
            let n = sessionStorage.length;
            for (; n--; ) {
              const t = sessionStorage.key(n);
              /liveEvents\.(.*)/g.test(t) && sessionStorage.removeItem(t);
            }
          } catch {}
        }
      }
      ((T = Ee).ɵfac = function (n) {
        return new (n || T)(e.LFG(st.O), e.LFG(me.pl), e.LFG(z.F0), e.LFG(c.eX), e.LFG(m.yh), e.LFG(J.sK), e.LFG(j.$), e.LFG(ae));
      }),
        (T.ɵprov = e.Yz7({ token: T, factory: T.ɵfac }));
      var L,
        U,
        vt = s(28368),
        mt = s(95949),
        Oe = s(36646),
        K = s(23280),
        se = s(68951);
      class Pe {
        constructor(n, t) {
          (this.actions$ = n),
            (this.socketService = t),
            (this.onClose$ = (0, c.GW)(
              () =>
                this.actions$.pipe(
                  (0, c.l4)(f.xv),
                  (0, q.b)(() => {
                    this.isAvailable() && this.socketService.socket.close();
                  })
                ),
              { dispatch: !1 }
            )),
            (this.onConnect$ = (0, c.GW)(() =>
              this.actions$.pipe(
                (0, c.l4)(f.$j),
                (0, C.w)(({ url: r }) => {
                  this.socketService.socket = new WebSocket(r);
                  const l = (0, Oe.T)((0, K.R)(this.socketService.socket, "close"), (0, K.R)(this.socketService.socket, "error")).pipe(
                      (0, se.R)(this.actions$.pipe((0, c.l4)(f.xv))),
                      (0, Y.h)(f.xv())
                    ),
                    h = (0, K.R)(this.socketService.socket, "message").pipe(
                      (0, se.R)(this.actions$.pipe((0, c.l4)(f.xv))),
                      (0, P.U)((O) => ((this.socketService.isOkay = !0), JSON.parse(O.data).message ? f.$F() : f.pT({ message: JSON.parse(O.data) })))
                    ),
                    x = (0, K.R)(this.socketService.socket, "open").pipe((0, se.R)(this.actions$.pipe((0, c.l4)(f.xv))), (0, Y.h)(f.bA()));
                  return (0, Oe.T)(l, h, x);
                })
              )
            )),
            (this.onSend$ = (0, c.GW)(
              () =>
                this.actions$.pipe(
                  (0, c.l4)(f.lW),
                  (0, C.w)(({ message: r }) => {
                    const l = this.socketService.socket;
                    return l && l.readyState === l.OPEN ? (0, y.of)(r) : this.actions$.pipe((0, c.l4)(f.bA), (0, fe.P)(), (0, Y.h)(r));
                  }),
                  (0, q.b)((r) => {
                    this.socketService.socket.send(JSON.stringify(r)),
                      clearInterval(this.checkInterval),
                      (this.socketService.isOkay = !0),
                      (this.checkInterval = setInterval(() => {
                        this.socketService.isOkay ? (this.ping(), (this.socketService.isOkay = !1)) : this.socketService.reInitialize(r);
                      }, 4e3));
                  })
                ),
              { dispatch: !1 }
            ));
        }
        isAvailable() {
          if (!this.socketService.socket) return !1;
          const n = this.socketService.socket.readyState;
          return n === this.socketService.socket.CONNECTING || n === this.socketService.socket.OPEN;
        }
        ping() {
          -1 === window.location.href.indexOf("cms") && -1 !== window.location.href.indexOf("live-events")
            ? this.socketService.socket.send("__ping__")
            : (clearInterval(this.checkInterval), this.socketService.socket.close());
        }
      }
      ((L = Pe).ɵfac = function (n) {
        return new (n || L)(e.LFG(c.eX), e.LFG(j.$));
      }),
        (L.ɵprov = e.Yz7({ token: L, factory: L.ɵfac }));
      class Se {}
      ((U = Se).ɵfac = function (n) {
        return new (n || U)();
      }),
        (U.ɵmod = e.oAB({ type: U })),
        (U.ɵinj = e.cJS({ providers: [j.$], imports: [c.sQ.forFeature([Pe])] }));
      const pt = (0, m.Lq)(
        {},
        (0, m.on)(te, () => ({})),
        (0, m.on)(ie, (i, { liveEvent: n }) => ({
          ...i,
          answerTimeSeconds: n.answer_time_sec,
          id: n.id,
          name: n.name,
          event: n,
          status: n.status,
          color_code: n.color_code,
          logo_url: n.logo_url,
        })),
        (0, m.on)(Q, (i, { session: n }) => ({ ...i, session: n })),
        (0, m.on)(B, (i, { answerTimeSeconds: n, status: t, highscore_list: r }) => ({ ...i, answerTimeSeconds: n, status: t, highscore_list: r }))
      );
      var A,
        ut = s(52749);
      class _e {}
      ((A = _e).ɵfac = function (n) {
        return new (n || A)();
      }),
        (A.ɵmod = e.oAB({ type: A })),
        (A.ɵinj = e.cJS({
          providers: [ee, j.$, ae],
          imports: [
            $.ez,
            he,
            vt.l,
            c.sQ.forFeature([Ee]),
            S.u5,
            le.yu,
            ce.yj,
            X.wp,
            V.Ps,
            J.aw,
            de.x4,
            ve.jc,
            me.y,
            mt.H,
            ut.n,
            Se,
            m.Aw.forFeature("liveEvent", function ft(i, n) {
              return pt(i, n);
            }),
          ],
        }));
    },
  },
]);
