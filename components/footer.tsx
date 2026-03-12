// components/footer.tsx
export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t bg-background/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-start md:justify-between">
        {/* 左：品牌介紹 */}
        <div className="space-y-3 max-w-sm">
          <h3 className="text-base font-semibold">
            張弛肌肉保健 Cheung Chi Muscle Matters
          </h3>
          <p className="text-sm text-muted-foreground">
            位於香港中環的專業物理治療及運動治療中心，專注處理運動傷患、
            慢性痛症及術後復康，幫助你重拾自在活動能力。
          </p>
        </div>

        {/* 中：快速連結 */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold">快速連結</h4>
          <nav className="flex flex-col gap-1 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">
              首頁
            </a>
            <a href="/services" className="hover:text-primary">
              服務總覽
            </a>
            <a href="/about" className="hover:text-primary">
              關於我們
            </a>
            <a href="/blog" className="hover:text-primary">
              健康專欄
            </a>
            <a href="/contact" className="hover:text-primary">
              預約聯絡
            </a>
          </nav>
        </div>

        {/* 右：聯絡方式 */}
        <div className="space-y-3 max-w-xs text-sm text-muted-foreground">
          <h4 className="text-sm font-semibold text-foreground">聯絡我們</h4>
          <p>
            地址：香港中環安蘭街 11-15 號
            <br />
            安蘭中心 1 樓
          </p>
          <p>
            電話：
            <a href="tel:+85223886618" className="text-primary hover:underline">
              +852 2388 6618
            </a>
          </p>
          <p>營業時間：星期一至六 10:00–19:00（需預約）</p>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-muted-foreground md:flex-row">
          <p>© {year} 張弛肌肉保健 Cheung Chi Muscle Matters. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">
              私隱政策
            </a>
            <a href="#" className="hover:text-primary">
              使用條款
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

