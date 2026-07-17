import { unlock } from "./actions";

type Props = {
  searchParams: Promise<{ next?: string; error?: string }>;
};

export default async function UnlockPage({ searchParams }: Props) {
  const params = await searchParams;
  const next = params.next?.startsWith("/work/") ? params.next : "/";
  const hasError = params.error === "1";

  return (
    <div className="mx-auto max-w-md px-6 py-32 md:py-40 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
        Password required
      </p>
      <h1 className="font-display text-3xl sm:text-4xl text-ink mb-4">
        This case study is private
      </h1>
      <p className="text-muted mb-10">Enter the password to continue.</p>
      <form action={unlock} className="flex flex-col items-center gap-4">
        <input type="hidden" name="next" value={next} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoFocus
          required
          className="w-full rounded-full border border-line bg-surface px-5 py-3 text-center text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
        />
        {hasError && (
          <p className="text-sm text-accent">
            That password isn&apos;t right — try again.
          </p>
        )}
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-white hover:text-ink hover:border-line"
        >
          Unlock
        </button>
      </form>
      <p className="mt-8 text-sm text-muted">
        Don&apos;t have the password? Email{" "}
        <a
          href="mailto:amywisegarver@gmail.com"
          className="text-ink underline decoration-line underline-offset-4 hover:decoration-accent transition-colors"
        >
          amywisegarver@gmail.com
        </a>{" "}
        for access.
      </p>
    </div>
  );
}
