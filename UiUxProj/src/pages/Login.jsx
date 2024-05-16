export default function Login() {
  return (
    <div className="bg-[#FFFFFF] flex p-[78px_117px_0_90px] w-[1440px] box-sizing-border">
      <div className="relative flex flex-col items-end box-sizing-border">
        <div className="m-[0_0_23.4px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
          <img className="m-[0_18.9px_0_0] w-[79.6px] h-[79.6px]" />
          <div className="m-[7.6px_0_6px_0] inline-block break-words font-['Roboto'] font-semibold text-[56.8px] tracking-[2.8px] text-[var(--text-color,#000000)]">
          KPICall
          </div>
        </div>
        <div className="m-[0_0_13px_0] flex flex-col items-center w-[fit-content] box-sizing-border">
          <div className="m-[0_0px_32px_0] inline-block break-words font-['Inter'] font-[var(--h-2-font-weight,600)] text-[48px] tracking-[var(--h-2-letter-spacing,-1.4px)] leading-[var(--h-2-line-height,1)] text-[var(--neutral-07,#1A1D1F)]">
          Sign in
          </div>
          <div className="flex flex-col items-center w-[fit-content] box-sizing-border">
            <div className="rounded-[2px] bg-[var(--neutral-03,#EFEFEF)] m-[0_0_32px_0] w-[360px] h-[2px]">
            </div>
            <div className="flex flex-col w-[fit-content] box-sizing-border">
              <div className="m-[0_0_20px_0] inline-block self-start break-words font-['Inter'] font-[var(--caption-1-font-weight,600)] text-[13px] tracking-[var(--caption-1-letter-spacing,-0.1px)] leading-[var(--caption-1-line-height,1.538)] text-[var(--neutral-07,#1A1D1F)]">
              Sign in with email address
              </div>
              <div className="m-[0_0_20px_0] flex w-[360px] box-sizing-border">
                <div className="rounded-[12px] bg-[var(--neutral-02,#F4F4F4)] flex flex-row p-[12px_0_12px_14px] w-[360px] box-sizing-border">
                  <div className="m-[4px_14px_4px_0] flex w-[20px] h-[16px] box-sizing-border">
                    <img className="w-[20px] h-[16px]" />
                  </div>
                  <div className="flex box-sizing-border">
                    <span className="break-words font-['Inter'] font-[var(--base-1-semibold-font-weight,600)] text-[15px] tracking-[var(--base-1-semibold-letter-spacing,-0.2px)] leading-[var(--base-1-semibold-line-height,1.6)] text-[#858585]">
                    Email
                    </span>
                  </div>
                </div>
              </div>
              <div className="m-[0_0_20px_0] flex w-[360px] box-sizing-border">
                <div className="rounded-[12px] bg-[var(--neutral-02,#F4F4F4)] flex flex-row p-[12px_0_12px_12px] w-[360px] box-sizing-border">
                  <img className="m-[0_12px_0_0] w-[24px] h-[24px]" />
                  <div className="flex box-sizing-border">
                    <span className="break-words font-['Inter'] font-[var(--base-1-semibold-font-weight,600)] text-[15px] tracking-[var(--base-1-semibold-letter-spacing,-0.2px)] leading-[var(--base-1-semibold-line-height,1.6)] text-[#858585]">
                    Password
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[fit-content] box-sizing-border">
                <div className="m-[0_0_12px_0] inline-block self-start break-words font-['Inter'] font-[var(--caption-1-font-weight,600)] text-[13px] tracking-[var(--caption-1-letter-spacing,-0.1px)] leading-[var(--caption-1-line-height,1.538)] text-[var(--neutral-07,#1A1D1F)]">
                Forgot your password?
                </div>
                <div className="m-[0_0_22px_0] flex w-[360px] box-sizing-border">
                  <div className="rounded-[12px] bg-[#6C5DD3] flex p-[12px_0.3px_12px_0] w-[360px] h-[fit-content] box-sizing-border">
                    <span className="break-words font-['Inter'] font-[var(--button-1-font-weight,700)] text-[15px] tracking-[var(--button-1-letter-spacing,-0.2px)] leading-[var(--button-1-line-height,1.6)] text-[var(--neutral-01,#FCFCFC)]">
                    Sign in
                    </span>
                  </div>
                </div>
                <div className="m-[0_6px_0_0] flex flex-col w-[fit-content] box-sizing-border">
                  <div className="m-[0_0_20px_0] inline-block self-start break-words font-['Inter'] font-[var(--body-2-semibold-font-weight,600)] text-[14px] tracking-[var(--body-2-semibold-letter-spacing,-0.1px)] leading-[var(--body-2-semibold-line-height,1.429)] text-[var(--neutral-07,#1A1D1F)]">
                  Or continue with Open accounts
                  </div>
                  <div className="flex flex-row w-[354px] box-sizing-border">
                    <div className="rounded-[12px] border-[2px_solid_var(--neutral-03,#EFEFEF)] bg-[var(--neutral-01,#FCFCFC)] m-[0_8px_0_0] flex flex-row p-[10px_0_10px_0] w-[173px] box-sizing-border">
                      <div className="bg-[url('assets/images/FacebookLogo20191.png')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_8px_0_0] w-[24px] h-[24px]">
                      </div>
                      <span className="break-words font-['Inter'] font-[var(--button-1-font-weight,700)] text-[15px] tracking-[var(--button-1-letter-spacing,-0.2px)] leading-[var(--button-1-line-height,1.6)] text-[var(--neutral-07,#1A1D1F)]">
                      Facebook
                      </span>
                    </div>
                    <div className="rounded-[12px] border-[2px_solid_var(--neutral-03,#EFEFEF)] bg-[var(--neutral-01,#FCFCFC)] flex flex-row p-[10px_0_10px_0] w-[173px] box-sizing-border">
                      <div className="m-[0_8.3px_0_0] flex w-[23.5px] h-[24px] box-sizing-border">
                        <img className="w-[23.5px] h-[24px]" />
                      </div>
                      <span className="break-words font-['Inter'] font-[var(--button-1-font-weight,700)] text-[15px] tracking-[var(--button-1-letter-spacing,-0.2px)] leading-[var(--button-1-line-height,1.6)] text-[var(--neutral-07,#1A1D1F)]">
                      Google
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-[0_52.1px_0_52.1px] flex flex-row justify-between w-[234.9px] box-sizing-border">
          <span className="m-[0_10px_0_0] w-[175px] break-words font-['Inter'] font-[var(--body-2-semibold-font-weight,600)] text-[14px] tracking-[var(--body-2-semibold-letter-spacing,-0.1px)] leading-[var(--body-2-semibold-line-height,1.429)] text-[var(--neutral-04,#6F767E)]">
          Don’t have an account? 
          </span>
          <span className="break-words font-['Inter'] font-[var(--body-2-semibold-font-weight,600)] text-[14px] tracking-[var(--body-2-semibold-letter-spacing,-0.1px)] leading-[var(--body-2-semibold-line-height,1.429)] text-[var(--primary-color,#6C5DD3)]">
          Sign up
          </span>
        </div>
      </div>
      <div className="bg-[url('assets/images/Project1.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat rotate-[-29.37deg] absolute left-[-605px] bottom-[-1022.8px] w-[1626.9px] h-[1450.8px]">
      </div>
      <div className="shadow-[0px_25.2px_18px_0px_rgba(177,177,177,0.05)] rounded-[16.8px] bg-[#FFFFFF] absolute left-[77px] bottom-[246px] flex w-[112.2px] h-[109px]">
        <div className="bg-[url('assets/images/Image171.png')] w-[35.6px] h-[56.3px]">
        </div>
      </div>
      <span className="absolute left-[90px] top-[235px] break-words font-['Roboto'] font-bold text-[92.2px] tracking-[4.6px] text-[#6C5DD3]">
      KPI<br />
      Management
      </span>
      <div className="bg-[#B6B6B6] absolute right-[592.5px] bottom-[0px] w-[1px] h-[951px]">
      </div>
    </div>
  )
}