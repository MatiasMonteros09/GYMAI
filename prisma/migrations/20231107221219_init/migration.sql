-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routine" (
    "id" SERIAL NOT NULL,
    "init" TIMESTAMP(3) NOT NULL,
    "creator_id" INTEGER NOT NULL,

    CONSTRAINT "routine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "body_part" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "routine_id" INTEGER NOT NULL,

    CONSTRAINT "body_part_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "objetive" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "routine_id" INTEGER NOT NULL,

    CONSTRAINT "objetive_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "body_part_routine_id_key" ON "body_part"("routine_id");

-- CreateIndex
CREATE UNIQUE INDEX "objetive_routine_id_key" ON "objetive"("routine_id");

-- AddForeignKey
ALTER TABLE "routine" ADD CONSTRAINT "routine_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "body_part" ADD CONSTRAINT "body_part_routine_id_fkey" FOREIGN KEY ("routine_id") REFERENCES "routine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "objetive" ADD CONSTRAINT "objetive_routine_id_fkey" FOREIGN KEY ("routine_id") REFERENCES "routine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
