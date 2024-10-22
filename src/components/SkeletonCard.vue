<template>
  <Card>
    <CardHeader class="h-[130px]">
      <CardTitle><Skeleton class="h-4 w-full" /></CardTitle>
      <CardDescription class="h-30 flex flex-col gap-2">
        <div />
        <Skeleton class="h-4 w-[170px]" />
        <Skeleton class="h-4 w-[150px]" />
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <div class="flex-1 space-y-1">
        <div class="overflow-hidden rounded-md">
          <Skeleton class="h-[325px] w-full rounded-xl" />
        </div>
      </div>
    </CardContent>
    <CardFooter class="justify-between gap-2">
      <Skeleton class="h-6 w-full" />
    </CardFooter>
  </Card>
</template>
